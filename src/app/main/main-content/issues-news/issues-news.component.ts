import { MockDataService } from './../../../shared/mockdata.service';
import { Subscription } from 'rxjs/Rx';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as _ from 'underscore';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit,  OnDestroy {

  datas:any;
  id: string;
  subscription:Subscription;
  imgPath:string = './assets/Contents/';
  selectedImage;

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
  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }

  ngOnInit() {
    this.mockDataService.getIssues();
    this.datas = this.mockDataService.news;
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
  setSelectedImage(image){
      this.selectedImage = image;	
   }


}
