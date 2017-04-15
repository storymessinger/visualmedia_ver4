import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-admission',
  templateUrl: './about-admission.component.html',
  styleUrls: ['./about-admission.component.scss']
})
export class AboutAdmissionComponent implements OnInit {

  public relPath:string = "../../../../assets/imgs/admission/";

  constructor() { }

  ngOnInit() {
  }

}
