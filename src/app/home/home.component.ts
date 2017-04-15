import { DataService } from './../shared/data.service';
import { Component, OnInit, Inject, ElementRef, DoCheck } from '@angular/core';

declare var TweenLite, TweenMax, TimelineLite, TimelineMax, Ease, Expo, ScrollMagic :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  
  public relPath:string = "./assets/";
  public mainImgPath:string = this.relPath + "imgs/home_mainImg.jpg";
  public logoIconPath:string = this.relPath + "imgs/logo.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";

  issues:any;
  teams:any;

  constructor(
    private dataService:DataService,
    private el:ElementRef,
    ) { 
  }

  ngOnInit() {
    this.setScrollMagic();
    this.dataService.getIssues();
    this.dataService.getResearchArea();
  }

  ngDoCheck() {
    this.issues = this.dataService.issues;
    this.teams = this.dataService.researchArea;
    if (this.teams !== []) {
      this.teams = this.teams.slice(0,3);
    }
  }

  setScrollMagic() {
    const controller = new ScrollMagic.Controller();
    const navigation_tween = new TimelineMax()
      .to('#logo-animation',0.15, {filter: 'contrast(1) brightness(1)'})
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
}