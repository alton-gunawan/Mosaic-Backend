import { DataSource } from 'typeorm';
import { Resource } from '../entity/resource.entity';

export const projectProviders = [
  {
    provide: 'PROJECT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Resource),
    inject: ['DATA_SOURCE'],
  },
];
