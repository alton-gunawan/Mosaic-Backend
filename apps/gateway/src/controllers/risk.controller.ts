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
  CreateRiskRequest,
  ListRisksRequest,
  RisksService,
  UpdateRiskRequest,
} from '../protos/risk';
import { from, map, take } from 'rxjs';

@Controller({
  version: '1',
  path: 'risks',
})
export class RisksController implements OnModuleInit {
  private readonly logger = new Logger(RisksController.name);
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
    @Query() listRisksDto?: ListRisksRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.riskService.ListRisks({
          ...listRisksDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((riskResult) => {
          resolve(riskResult);
        });
    });
  }

  @Post()
  public async create(@Body() createRiskDto: CreateRiskRequest): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.riskService.CreateRisk({
          ...createRiskDto,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((projectResult) => {
          Logger.log('projectResult: ');
          Logger.log(projectResult);

          resolve(projectResult[0]);
        });
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateRiskDto: UpdateRiskRequest,
  ) {
    const { id: riskId, ...data } = updateRiskDto;

    return new Promise((resolve) => {
      from(
        this.riskService.UpdateRisk({
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
      from(this.riskService.DeleteRisk({ id: +id })).subscribe(
        (deleteRiskResult) => {
          resolve(deleteRiskResult);
        },
      );
    });
  }
}
