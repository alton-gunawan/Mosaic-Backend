import * as crypto from 'crypto';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  PutCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { CreateTaskCommand } from '../impl/create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler
  implements ICommandHandler<CreateTaskCommand, any | object>
{
  async execute(command: CreateTaskCommand): Promise<any> {
    const taskId = crypto.randomUUID().toString();

    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const params = {
      TableName: 'mosaic-task-db',
    };

    const putCommand = new PutCommand({
      ...params,
      Item: {
        ...command,
        id: taskId,
      },
    });

    const getCommand = new GetCommand({
      ...params,
      Key: {
        id: taskId,
      },
    });

    return await dynamo.send(putCommand).then(async (data: PutCommandOutput) => {
      if (data.$metadata.httpStatusCode === 200) {
        return await dynamo.send(getCommand).then((data) => {
          return data.Item;
        });
      }
    });
  }
}
