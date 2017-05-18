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
  
  constructor(private router:Router) { 
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
