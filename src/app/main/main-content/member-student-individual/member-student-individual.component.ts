import { DataService } from './../../../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-member-student-individual',
  templateUrl: './member-student-individual.component.html',
  styleUrls: ['./member-student-individual.component.scss']
})
export class MemberStudentIndividualComponent implements OnInit, DoCheck {

  subscription: Subscription;
  id: number;
  datas: any;
  publications: any;
  projects: any;
  imgPath:string = './assets/Contents/';

  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
        this.id = parseInt(param['id']);
        })
  }

  ngOnInit() {
    this.dataService.getMembers(this.id);
  }
  ngDoCheck() {
    this.datas = this.dataService.people_person; 
    
    if (this.datas !== undefined) {
      let pub_titles= this.datas.pub_title.split(',')
      let pub_conference= this.datas.pub_conference.split(',');
      let projects_name= this.datas.projects_name.split(',');
      const pub_length = pub_titles.length;
      const projects_length = projects_name.length;
      for (let i=0; i++; i<pub_length) {
        let sub = {
          title : pub_titles[i],
          conference : pub_conference[i]
        };
        this.publications.push(sub)
      }
      for (let i=0; i++; i<projects_length) {
        let sub = {
          name : projects_name[i],
        };
        this.projects.push(sub)
      }
    }
  }

}
