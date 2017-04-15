import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { DataService } from './../../../shared/data.service';
import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-research-projects-individual',
  templateUrl: './research-projects-individual.component.html',
  styleUrls: ['./research-projects-individual.component.scss']
})
export class ResearchProjectsIndividualComponent implements OnInit, DoCheck {

  imgPath:string = './assets/Contents/';
  subscription: Subscription;
  id: number;
  datas:any[] = [];
  first_data:any = {
    id : null,
    type: null,
    year: null,
    name: null,
    fullname: null,
    area:null,
    description:null,
    partners_id:null,
    funding_id:null,
    teams_id:null,
    people_id:null,
    status:null,
    date_start:null,
    date_end:null,
    teams_shortname:null,
    people_name:null,
    funding_name:null,
    funding_img:null
  }

  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute
  ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = parseInt(param['id']);
        })
  }

  ngOnInit() {
    this.dataService.getProjects(this.id);
  }

  ngDoCheck() {
    if (this.dataService.projects_individual[0] != undefined){
      this.datas = this.dataService.projects_individual;
      this.first_data = this.dataService.projects_individual[0];
    }
  }

}
