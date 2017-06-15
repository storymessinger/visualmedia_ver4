import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MockDataService } from '../shared/mockdata.service';
import { Router } from '@angular/router';
import * as _ from 'underscore';

declare var TweenLite, TweenMax, TimelineLite, TimelineMax, Ease, Expo, ScrollMagic, Power2 :any;

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
  publications:any;
  partners:any;

  constructor(
    private mockDataService:MockDataService,
    private el:ElementRef,
    private router:Router
    ) { 
  }

  ngOnInit() {
    this.setScrollMagic();
    this.arrowMove();
    this.mockDataService.getIssues();
    this.mockDataService.getResearchArea();
    this.mockDataService.getPublication('international');

    this.mockDataService.getPartners(true);

    this.publications = this.mockDataService.publications_forHome.slice(0,3);
    this.issues = this.mockDataService.issues.slice(0,6);
    this.teams = this.mockDataService.researchArea_all;

    this.partners = this.mockDataService.main_partners;


    
  }

  arrowMove() {
    let arrowBtn = document.getElementById("arrowBtn");
    var tl = new TimelineMax({repeat:20});
    tl.to(arrowBtn, 0.7, {y:30})
      .to(arrowBtn, 1, {y:0})
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

  navigateTo(id, arg = 0) {
    if (arg == 0) {
      this.router.navigate(['/main/area/teams', id])
    } else if (arg == 1) {
      this.router.navigate(['/main/international/individual', id]);
    }
  }

  moveTo(id) {
    // console.log(id);
    // var controller = new ScrollMagic.Controller();
    // var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
    //             .addTo(controller);
    var new_id = '#' + id + 'Place';
    // controller.scrollTo(new_id);
    TweenLite.to(window, 1.3, {scrollTo:{y:new_id}, ease:Power2.easeOut})
  }
}