import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid'; 
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

  
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  
  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if(status) 
      tasks = this.applyStatusFilter(tasks, status);
    
    if(search) 
      tasks = this.applySearchFilter(tasks, search);

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string) { 
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  applyStatusFilter(tasks: Task[], status: TaskStatus) {
    return tasks.filter(task => task.status === status);
  }

  applySearchFilter(tasks: Task[], search: string) {
    return tasks.filter(task => 
      task.title.includes(search) || 
      task.description.includes(search),
    );
  }


}
