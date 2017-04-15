import { ResearchArea } from './mock/mock-researchArea';
import { Injectable } from '@angular/core';

@Injectable()
export class ResearchAreaService {

  constructor() { }

  getResearchArea(team = null):any {
    if (team == null) {
      return ResearchArea;
    } else {
      return ResearchArea.find( item => item.team === team);
    }
  }

}
