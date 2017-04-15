import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Injectable, Input } from '@angular/core';

import * as Fuse from 'fuse.js'

@Injectable()
export class SearchService {

  searchInput:any;

  private options = { shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "title",
        "name",
        "desc"
    ]
  } 

  constructor(
    private dataService:DataService,
    private router:Router
    ) { }

  initSearch(input:string = "") {
    this.searchInput = input;
    this.router.navigate(['/main/search']);
  }

  getSearch_people() {
    console.log(this.dataService.people);
    var fuse = new Fuse(this.dataService.people, this.options); // "list" is the item array
    var result = fuse.search(this.searchInput);
    return result;
  }
  getSearch_publications() {
    var fuse = new Fuse(this.dataService.publications, this.options); // "list" is the item array
    var result = fuse.search(this.searchInput);
    return result;
  }
  getSearch_projects() {
    var fuse = new Fuse(this.dataService.projects, this.options); // "list" is the item array
    var result = fuse.search(this.searchInput);
    return result;
  }
}
