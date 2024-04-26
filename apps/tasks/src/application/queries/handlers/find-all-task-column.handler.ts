import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { FindAllTaskColumnQuery } from '../impl/find-all-task-column.query';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/lib-dynamodb';

@QueryHandler(FindAllTaskColumnQuery)
export class FindAllTaskColumnQueryHandler
  implements IQueryHandler<FindAllTaskColumnQuery, any | object>
{
  async execute(command: FindAllTaskColumnQuery): Promise<any> {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const params: ScanCommandInput = {
      TableName: 'mosaic-task-column-db',
      FilterExpression: 'contains(projectId, :projectIdValue)',
      ExpressionAttributeValues: {
        ':projectIdValue': command?.projectId.toString(),
      },
    };

    const data = await dynamo.send(new ScanCommand(params));

    return data.Items;
  }
}
