import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // selector: 'app-main', // you dont need this
  templateUrl: './main.component.html',
  styles: [`
  `]
})
export class MainComponent implements OnInit {

  public sidebarState:boolean = false; //default is false
  public isMouseOnSidebar:boolean;

  public initLink:any;
  
  constructor(private router:Router) { 
    switch(document.location.pathname) {
        case '/main/info':
          this.initLink= "About";
          break;
        case '/main/people':
          this.initLink= "People";
          break;
        case '/main/area':
          this.initLink= "Research";
          break;
        case '/main/news':
          this.initLink= "News";
          break;
        case '/main/seminar':
          this.initLink= "Archive";
          break;
        default:
          break;
    }
  }


  ngOnInit() {
         this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }

  onClicked(event) {
    this.sidebarState = event;
  }




}
