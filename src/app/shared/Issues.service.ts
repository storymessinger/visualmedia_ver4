import { Issues } from './mock/mock-issues';
import { Injectable } from '@angular/core';
import * as _ from 'underscore';


@Injectable()
export class IssuesService {

  public groupedIssues = _.groupBy(Issues, 'type');


  constructor() { 

  }

  getIssues() {
    return Issues;
  }

  getNews() {
    return this.groupedIssues['news'];
  }

  getMedia() {
    return this.groupedIssues['media'];

  }
}


