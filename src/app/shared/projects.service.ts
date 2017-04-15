import { Projects } from './mock/mock-projects';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  constructor() { }

  getProjects():any {
    return Projects;
  }

}
