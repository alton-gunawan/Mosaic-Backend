import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';

describe('ResourcesController', () => {
  let resourcesController: ResourcesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesController],
      providers: [ResourcesService],
    }).compile();

    resourcesController = app.get<ResourcesController>(ResourcesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(resourcesController.getHello()).toBe('Hello World!');
    });
  });
});
