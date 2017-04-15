import { Publications } from './mock/mock-publications';
import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class PublicationsService {

  id: any;
  groupedPublication = _.groupBy(Publications, 'type');
  teamedPublication = _.groupBy(Publications, 'team');

  international = this.groupedPublication['international'];
  domestic = this.groupedPublication['domestic'];
  thesis = this.groupedPublication['thesis'];

  constructor() { 

  }

  getPublicationsInt(id:number= 0):any {
    if (id == 0) {
      return this.international;
    } else {
      return this.international.find( item => item.id === id);
    }
  }
    // return this.groupedIssues['news'];

  getPublicationsKr(id:number= 0):any {
    if (id == 0) {
      return this.domestic;
    } else {
      return this.domestic.find( item => item.id === id);
    }
  }

  getThesis(id:number= 0):any {
    if (id == 0) {
      return this.thesis;
    } else {
      return this.thesis.find( item => item.id === id);
    }
  }

  getPublicationsByTeam(team:any):any {
    return this.teamedPublication[team];
  }

}