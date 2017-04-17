import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-main', // you dont need this
  templateUrl: './main.component.html',
  styles: [`
  `]
})
export class MainComponent implements OnInit {

  public sidebarState:boolean = false; //default is false
  public isMouseOnSidebar:boolean;
  
  constructor() { 
  }


  ngOnInit() {
  }

  onClicked(event) {
    this.sidebarState = event;
  }




}
