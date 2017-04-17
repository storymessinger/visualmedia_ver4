import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-area-individual',
  templateUrl: './research-area-individual.component.html',
  styleUrls: ['./research-area-individual.component.scss']
})
export class ResearchAreaIndividualComponent implements OnInit {

  imgPath = "./assets/Contents/";

  id:any;
  datas:any;

  private subscription: Subscription;

  constructor(
    private router:Router,
    private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = param['id'];
        })
  }

  ngOnInit() {
    this.mockDataService.getResearchArea(this.id);
    this.datas = this.mockDataService.researchArea;
  }
}
