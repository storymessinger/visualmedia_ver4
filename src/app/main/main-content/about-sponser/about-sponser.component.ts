import { Router } from '@angular/router';
import { MockDataService } from './../../../shared/mockdata.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-about-sponser',
  templateUrl: './about-sponser.component.html',
  styleUrls: ['./about-sponser.component.scss']
})
export class AboutSponserComponent implements OnInit {

  datas:any;
  platinum;
  gold;
  silver;

  constructor(private mockDataService:MockDataService, private router:Router) { }

  ngOnInit() {
    this.mockDataService.getSponser();
    this.datas = this.mockDataService.sponser;
    
    this.platinum = _.values(_.groupBy(this.datas['platinum'], 'year')).reverse();
    this.gold = _.values(_.groupBy(this.datas['gold'], 'year')).reverse();
    this.silver = _.values(_.groupBy(this.datas['silver'], 'year')).reverse();


  }

  navigateTo(link, arg) {
    if (arg == 'people') {
      this.router.navigate([link]);
    } else if (arg == 'partners') {
      window.location.href = link;
    }
  }


}
