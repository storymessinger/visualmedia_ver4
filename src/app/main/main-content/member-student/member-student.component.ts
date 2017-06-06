import { Subscription } from 'rxjs/Rx';
import { ScrollAbleService } from '../../../shared/scroll-able.service';
import { Component, OnDestroy, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageScrollConfig, PageScrollInstance, PageScrollService } from 'ng2-page-scroll';
import { MockDataService } from './../../../shared/mockdata.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent implements OnInit, OnDestroy {

  imgPath:string = './assets/Contents/';
  public datas:any;
  subscription:Subscription;

  constructor(
    private mockDataService:MockDataService,
    private scrollAbleService:ScrollAbleService,
    private pageScrollService: PageScrollService, 
    private router:Router,
    @Inject(DOCUMENT) private document: any
    ) { 
      
    //* PageScroll Configuration
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    //*

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
    this.mockDataService.getMembers();
    this.datas = this.mockDataService.people;
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  routing(id) {
    this.router.navigate(['/main/people/person', id])
  }

}
