import { ResearchArea } from './../../../shared/mock/mock-researchArea';
import { DataService } from './../../../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-area',
  templateUrl: './research-area.component.html',
  styleUrls: ['./research-area.component.scss']
})
export class ResearchAreaComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private mockDataService:MockDataService
    ) { }


  ngOnInit() {
    
  }

}
