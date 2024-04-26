import * as crypto from 'crypto';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { CreateTaskColumnCommand } from '../impl/create-task-column.command';

@CommandHandler(CreateTaskColumnCommand)
export class CreateTaskColumnHandler
  implements ICommandHandler<CreateTaskColumnCommand, any | object>
{
  async execute(command: CreateTaskColumnCommand): Promise<any> {
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
      new PutCommand({
        ...params,
        Item: {
          ...command,
          id: crypto.randomUUID().toString(),
        },
      }),
    );

    return data;
  }
}
