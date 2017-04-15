import { Members } from './mock/mock-member';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {

  constructor() { }

  getMembers(id:number=0):any {
    if (id == 0) {
      return Members;
    } else {
      // return this.datasById[id][0];
      return Members.find( item => item.id === id);
    }
  }
}
