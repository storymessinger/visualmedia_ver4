import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-publicate-kr',
  templateUrl: './research-publicate-kr.component.html',
  styleUrls: ['./research-publicate-kr.component.scss']
})
export class ResearchPublicateKrComponent implements OnInit, OnDestroy {

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
    this.mockDataService.getPublication('domestic');
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
