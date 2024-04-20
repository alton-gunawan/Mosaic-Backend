import { IsDate, IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumberString()
  startDate: number;

  @IsNumberString()
  endDate: number;

  @IsString()
  createdBy: string;
}
