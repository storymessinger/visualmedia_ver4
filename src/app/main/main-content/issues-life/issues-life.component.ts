import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MockDataService } from './../../../shared/mockdata.service';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-issues-life',
  templateUrl: './issues-life.component.html',
  styleUrls: ['./issues-life.component.scss']
})
export class IssuesLifeComponent implements OnInit, OnDestroy {


  imgPath:string = './assets/Contents/';
  datas:any;
  selectedImage;
  subscription:Subscription;

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
    this.mockDataService.getLife();
    this.datas = this.mockDataService.life;
  }


  setSelectedImage(image){
      this.selectedImage = image;	
   }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }


}
