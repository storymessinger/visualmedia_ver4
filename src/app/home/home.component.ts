import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MockDataService } from '../shared/mockdata.service';
import { Router } from '@angular/router';

declare var TweenLite, TweenMax, TimelineLite, TimelineMax, Ease, Expo, ScrollMagic :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public relPath:string = "./assets/";
  public imgPath:string = "./assets/Contents/"
  public mainImgPath:string = this.relPath + "imgs/home_mainImg.jpg";
  public logoIconPath:string = this.relPath + "imgs/logo.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";

  issues:any;
  teams:any;

  constructor(
    private mockDataService:MockDataService,
    private el:ElementRef,
    private router:Router
    ) { 
  }

  ngOnInit() {
    this.setScrollMagic();
    this.mockDataService.getIssues();
    this.mockDataService.getResearchArea();
    this.issues = this.mockDataService.issues.slice(0,12);
    this.teams = this.mockDataService.researchArea_all;
  }

  setScrollMagic() {
    const controller = new ScrollMagic.Controller();
    const navigation_tween = new TimelineMax()
      .to('#logo-animation',0.15, {filter: 'contrast(1) brightness(1)'})
      .set('.menu_btn', {color:'#F05A29'})
      .set('#nav-animation', { boxShadow: '0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12)'})
      .to('#nav-animation', 0.15, { backgroundColor:'white'})
      .to('.nav-item a', 0.3, {color:'#262626'})

    const title_tween = TweenLite.to('.title', 0.5, {
      opacity: 0
    })

    const nav_scene = new ScrollMagic.Scene({
      triggerElement: '#nav-trigger'
    })
      .setTween([navigation_tween, title_tween]);

    controller.addScene([
      nav_scene
    ]);
  }

  navigateTo(id) {
    this.router.navigate(['/main/area/teams', id])
  }
}