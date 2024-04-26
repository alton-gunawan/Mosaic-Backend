import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DeleteCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DeleteTaskColumnCommand } from '../impl/delete-task-column.command';

@CommandHandler(DeleteTaskColumnCommand)
export class DeleteTaskColumnHandler
  implements ICommandHandler<DeleteTaskColumnCommand, any | object>
{
  async execute(command: DeleteTaskColumnCommand): Promise<any> {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const params = {
      TableName: 'mosaic-task-column-db',
    };

    const data = await dynamo.send(
      new DeleteCommand({
        ...params,
        Key: {
          id: command.id,
        },
      }),
    );

    return data;
  }
}
