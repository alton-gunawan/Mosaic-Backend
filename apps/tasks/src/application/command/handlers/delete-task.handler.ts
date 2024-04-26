import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DeleteCommandInput,
  DynamoDBDocumentClient,
} from '@aws-sdk/lib-dynamodb';
import { DeleteTaskCommand } from '../impl/delete-task.command';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler
  implements ICommandHandler<DeleteTaskCommand, any | object>
{
  async execute(command: DeleteTaskCommand): Promise<any> {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const params: DeleteCommandInput = {
      TableName: 'mosaic-task-db',
      Key: {
        id: command.id,
      },
    };

    const data = await dynamo.send(
      new DeleteCommand({
        ...params,
      }),
    );

    return data;
  }
}
