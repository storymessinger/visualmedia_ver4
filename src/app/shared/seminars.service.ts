import { Seminars } from './mock/mock-seminar';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SeminarService {


  constructor(private http:Http) { 
  }

  // theSeminars:any;
  // setSeminars() {
  //   this.theSeminars = Seminars;
  // }

  getSeminars() {

    //* use this later
    // return this.http.get('main/content/seminar')
    //   .map(res => res.json());
    //* use this later

    return Seminars;
  }

}
