import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async findAll(conditionalFilter?: any) {
    return await this.projectRepository.find({
      where: { ...conditionalFilter },
    });
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne({
      where: { id },
    });
  }

  async findByUser(userId: string) {
    return await this.projectRepository.find({
      where: { createdBy: userId },
    });
  }

  async create(createProjectDto: any) {
    return await this.projectRepository.save({ ...createProjectDto });
  }      

  async update(id: number, updateProjectDto: any) {
    return await this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.projectRepository.delete(id);
  }
}
