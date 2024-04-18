import { Test, TestingModule } from '@nestjs/testing';
import { RisksController } from './risks.controller';
import { RisksService } from './risks.service';

describe('RisksController', () => {
  let risksController: RisksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RisksController],
      providers: [RisksService],
    }).compile();

    risksController = app.get<RisksController>(RisksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(risksController.getHello()).toBe('Hello World!');
    });
  });
});
