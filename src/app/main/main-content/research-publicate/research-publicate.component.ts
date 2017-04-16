import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-publicate',
  templateUrl: './research-publicate.component.html',
  styleUrls: ['./research-publicate.component.scss']
})
export class ResearchPublicateComponent implements OnInit, OnDestroy {


  datas:any;
  id: string;
  subscription: Subscription;
  imgPath:string = './assets/Contents/';


  constructor(
    private mockDataServicee:MockDataService,
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
    this.mockDataServicee.getPublication('international')
    this.datas = this.mockDataServicee.publications;
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

