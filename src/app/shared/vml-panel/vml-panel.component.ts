import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[vmlPanel]', // Refer to it like an attribute directive
  templateUrl: './vml-panel.component.html',
  styleUrls: ['./vml-panel.component.scss'],
  encapsulation: ViewEncapsulation.None // Tell Angular to not scope your styles
})
export class VmlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
