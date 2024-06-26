import { IsArray, IsNotEmpty } from 'class-validator';

export class AssignTaskDto {
  @IsArray()
  @IsNotEmpty()
  userId: Array<string>;
}
