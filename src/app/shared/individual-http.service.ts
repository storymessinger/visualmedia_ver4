import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
// import {Course} from "../shared/model/course";
// import {Lesson} from "../shared/model/lesson";

@Injectable()
export class IndividualHttpService {

  constructor(private http:Http) { }

  findById(individualId: number): Observable<any> {
    console.log("individualId: " + individualId);
      return this.http.get(`/api/individual/${individualId}`)
              .map(res => res.json());
  }


}
