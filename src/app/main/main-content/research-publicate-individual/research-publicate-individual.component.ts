import { ProjectpageHttpService } from '../../../shared/projectpage-http.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-publicate-individual',
  templateUrl: './research-publicate-individual.component.html',
  styleUrls: ['./research-publicate-individual.component.scss']
})

export class ResearchPublicateIndividualComponent implements OnInit {

  subscription: Subscription;
  id: number;
  datas:any;
  imgPath:string = './assets/Contents/';
  individual$: Observable<any>;

  constructor(
    private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute,
    private projectpageHttpService:ProjectpageHttpService
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = parseInt(param['id']);
        })
  }

  ngOnInit() {
    this.mockDataService.getPublication('whole',this.id);
    this.datas = this.mockDataService.publication_individual;

    this.individual$ = this.projectpageHttpService.findById(this.id);
  }


}
