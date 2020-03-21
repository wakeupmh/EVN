import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAllTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    if(Object.keys(filterDto).length){
      return this.tasksService.getTasksWithFilter(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  async updateStatus(
    @Param('id') id: string, 
    @Body('status') status: TaskStatus
  ): Promise<Task> {
    return this.tasksService.updateStatus(id, status);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }
  
  
}
