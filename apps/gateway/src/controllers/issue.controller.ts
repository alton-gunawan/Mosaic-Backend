import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateIssuesRequest,
  ListIssuesRequest,
  RisksService,
  UpdateIssuesRequest,
} from '../protos/risk';
import { from, map, take } from 'rxjs';

@Controller({
  version: '1',
  path: 'issues',
})
export class IssuesController implements OnModuleInit {
  private readonly logger = new Logger(IssuesController.name);
  private riskService: RisksService;

  constructor(
    @Inject('RISK_PACKAGE')
    private readonly riskPackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.riskService = this.riskPackageClient.getService('RisksService');
  }

  @Get()
  public async listRisk(
    @Query() listIssuesDto?: ListIssuesRequest,
  ): Promise<any> {
    Logger.log('listIssuesDto:func()');
    Logger.log(listIssuesDto);

    return new Promise((resolve) => {
      from(
        this.riskService.ListIssues({
          ...listIssuesDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((issueResult) => {
          Logger.log('issueResult:func()');
          Logger.log(issueResult);
          resolve(issueResult);
        });
    });
  }

  @Post()
  public async create(
    @Body() createIssueDto: CreateIssuesRequest,
  ): Promise<any> {
    Logger.log('CreateIssuesRequest');
    Logger.log(JSON.stringify(createIssueDto));

    return new Promise((resolve) => {
      from(
        this.riskService.CreateIssues({
          ...createIssueDto,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((issueResult) => {
          Logger.log('issueResult: ');
          Logger.log(issueResult);

          resolve(issueResult[0]);
        });
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateIssueDto: UpdateIssuesRequest,
  ) {
    const { id: riskId, ...data } = updateIssueDto;

    return new Promise((resolve) => {
      from(
        this.riskService.UpdateIssues({
          ...data,
          id: +id,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((riskResult) => {
          Logger.log('update:riskResult()');
          Logger.log(riskResult);

          resolve(riskResult[0]);
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<any> {
    return new Promise((resolve) => {
      from(this.riskService.DeleteIssues({ id: +id })).subscribe(
        (deleteIssueResult) => {
          resolve(deleteIssueResult);
        },
      );
    });
  }
}
