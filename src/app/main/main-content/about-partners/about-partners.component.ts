import { DataService } from './../../../shared/data.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss']
})
export class AboutPartnersComponent implements OnInit, DoCheck {

  public datas:any;
  private imgPath = "./assets/Contents/";

  constructor(
    private dataService:DataService
  ) { 
  }

  ngOnInit() {
    this.dataService.getPartners();
  }
  ngDoCheck() {
    this.datas = _.groupBy(this.dataService.partners, 'type');
  }

}
