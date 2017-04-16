import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss']
})
export class AboutPartnersComponent implements OnInit {

  public datas:any;
  private imgPath = "./assets/Contents/";

  constructor(
    private mockDataService:MockDataService
  ) { 
  }

  ngOnInit() {
    this.mockDataService.getPartners();
    this.datas = this.mockDataService.partners;
    console.log(this.datas);
  }
}
