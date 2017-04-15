import { DataService } from './../../../shared/data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-research-publicate-individual',
  templateUrl: './research-publicate-individual.component.html',
  styleUrls: ['./research-publicate-individual.component.scss']
})

export class ResearchPublicateIndividualComponent implements OnInit,DoCheck {

  subscription: Subscription;
  id: number;
  datas:any;
  imgPath:string = './assets/Contents/';

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
    this.dataService.getPublication(this.id);
  }
  ngDoCheck() {
    if (this.dataService.publication_individual !== []) {
      this.datas = this.dataService.publication_individual;
    }
  }


}
