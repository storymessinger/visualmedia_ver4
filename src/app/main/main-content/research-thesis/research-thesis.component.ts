import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-thesis',
  templateUrl: './research-thesis.component.html',
  styleUrls: ['./research-thesis.component.scss']
})
export class ResearchThesisComponent implements OnInit, OnDestroy {

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
    this.mockDataService.getPublication('thesis');
    this.datas = this.mockDataService.publications;
  }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}

