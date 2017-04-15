import { MockDataService } from './../../../shared/mockdata.service';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit {


  datas:any;
  id: string;
  subscription: Subscription;
  imgPath:string = './assets/Contents/';

  constructor(
    private mockDataService:MockDataService,
    private scrollAbleService:ScrollAbleService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { 
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    this.subscription = this.scrollAbleService.getScroll()
      .subscribe(name => { 
        this.clickScrollTo(name);
      })
  }

  ngOnInit() {
    this.mockDataService.getSeminars();
    this.datas = this.mockDataService.seminars;
  }
  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
}

