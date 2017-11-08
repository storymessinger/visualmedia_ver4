import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
// import {Course} from "../shared/model/course";
// import {Lesson} from "../shared/model/lesson";

@Injectable()
export class ProjectpageHttpService {

  constructor(private http:Http) { }

  findById(individualId: number): Observable<any> {
      return this.http.get(`/api/projectPage/${individualId}`)
              .map(res => res.json());
  }


}

