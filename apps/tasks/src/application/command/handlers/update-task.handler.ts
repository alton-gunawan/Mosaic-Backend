import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  UpdateCommand,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb';
import { UpdateTaskCommand } from '../impl/update-task.command';
import GenerateUpdateExpression from 'apps/tasks/src/utils/generate-update-expression';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler
  implements ICommandHandler<UpdateTaskCommand, any | object>
{
  async execute(command: UpdateTaskCommand): Promise<any> {
    const { id, createdBy, projectId, ...formattedComand } = Object.fromEntries(
      Object.entries(command).filter(
        ([_, value]) => value !== null && typeof value !== 'undefined',
      ),
    );

    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const expression = GenerateUpdateExpression(formattedComand);

    const params: UpdateCommandInput = {
      TableName: 'mosaic-task-db',
      Key: {
        id: command.id,
      },
      ...expression,
    };

    const data = await dynamo.send(
      new UpdateCommand({
        ...params,
      }),
    );

    return data;
  }
}
