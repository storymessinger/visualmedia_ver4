import { DataService } from './../shared/data.service';
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
  
  constructor(private dataservice:DataService) { 
    this.dataservice.init();
  }


  ngOnInit() {
  }

  onClicked(event) {
    this.sidebarState = event;
  }




}
