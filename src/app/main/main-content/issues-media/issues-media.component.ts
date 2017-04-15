import { DataService } from './../../../shared/data.service';
import { DOCUMENT } from '@angular/platform-browser';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { PageScrollInstance, PageScrollService, PageScrollConfig } from 'ng2-page-scroll';
import { Subscription } from 'rxjs/Rx';

import { Component, OnInit, OnDestroy, Inject, DoCheck } from '@angular/core';

@Component({
  selector: 'app-issues-media',
  templateUrl: './issues-media.component.html',
  styleUrls: ['./issues-media.component.scss']
})
export class IssuesMediaComponent implements OnInit, DoCheck, OnDestroy {


  datas:any;
  id: string;
  imgPath:string = './assets/Contents/';

  private subscription: Subscription;

  constructor(
    private dataService:DataService,
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
    this.dataService.getIssues();
  }

  ngDoCheck() {
    this.datas = this.dataService.medias;
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
