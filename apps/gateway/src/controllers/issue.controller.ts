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
import { catchError, from, map, of, take, throwError } from 'rxjs';

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
  public async listIssue(
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
          resolve(issueResult || []);
        });
    });
  }

  @Post()
  public async create(
    @Body() createIssueDto: CreateIssuesRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.riskService.CreateIssues({
          ...createIssueDto,
          status: +createIssueDto.status || undefined,
          priority: +createIssueDto.priority || undefined,
        }),
      )
        .pipe(catchError((error) => throwError(error)))
        .pipe(
          take(1),
          map((result) => result?.data?.data),
        )
        .subscribe({
          next: (issueResult) => {
            resolve(issueResult[0]);
          },
          error: (err) => {
            resolve(err);
          },
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
