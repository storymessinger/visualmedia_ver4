import { Partners } from './mock/mock-partners';
import { Injectable } from '@angular/core';

@Injectable()
export class PartnersService{

  constructor() { }

  getPartners():any[] {
    return Partners
  }

}
