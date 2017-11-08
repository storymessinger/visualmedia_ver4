import { IndividualHttpService } from '../../../shared/individual-http.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-member-student-individual',
  templateUrl: './member-student-individual.component.html',
  styleUrls: ['./member-student-individual.component.scss'],
})
export class MemberStudentIndividualComponent implements OnInit {

  subscription: Subscription;
  id: number;
  datas: any;
  imgPath:string = './assets/Contents/';

  individual$: Observable<any>;

  constructor(
    private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute,
    private individualHttpService:IndividualHttpService) { 

    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
        this.id = parseInt(param['id']);
        })
  }

  ngOnInit() {
    this.mockDataService.getMembers(this.id);
    this.datas = this.mockDataService.people_person;

    this.individual$ = this.individualHttpService.findById(this.id);

  }

}
