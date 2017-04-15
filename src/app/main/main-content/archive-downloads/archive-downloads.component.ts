import { MockDataService } from './../../../shared/mockdata.service';
import { Subscription } from 'rxjs/Rx';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, OnDestroy, OnChanges, Inject } from '@angular/core';

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {

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
    this.mockDataService.getDownloads();
    this.datas = this.mockDataService.downloads;
  }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }

}

