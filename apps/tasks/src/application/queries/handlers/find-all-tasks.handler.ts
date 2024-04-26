import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllTasksQuery } from '../impl/find-all-tasks.query';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/lib-dynamodb';

@QueryHandler(FindAllTasksQuery)
export class FindAllTasksQueryHandler
  implements IQueryHandler<FindAllTasksQuery, any | object>
{
  async execute(command: FindAllTasksQuery): Promise<any> {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const params: ScanCommandInput = {
      TableName: 'mosaic-task-db',
      FilterExpression: '#task_column_id = :task_column_id OR #project_id = :project_id',
      ExpressionAttributeNames: {
        '#task_column_id': 'taskColumnId',
        '#project_id': 'projectId',
      },
      ExpressionAttributeValues: {
        ':task_column_id': command?.taskColumnId || '',
        ':project_id': command?.projectId || '',
      },
    };

    const data = await dynamo.send(new ScanCommand(params));

    return data.Items;
  }
}
