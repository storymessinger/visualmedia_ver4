import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import * as Fuse from 'fuse.js'
import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  private people_options = { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "name",
    ]
  } 
  private publications_options = { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "title",
        "teams.shortname",
        "authors_array"
    ]
  } 
  private projects_options= { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "name",
        "teams.shortname",
        "people.name",
        "partner.name"
    ]
  } 
  subscription: Subscription;
  id: string;
  current_id;

  people:any;
  result_people:any;
  publications:any;
  result_publications:any;
  projects:any;
  result_projects:any;

  constructor(
    private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute,
    private http:Http,
    private router:Router
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = param['id'];
          // if ( this.current_id == undefined ) {
          //   this.current_id = this.id;
          // }
          // if (this.id != this.current_id) {
          //   location.reload();
          // } else {
          //   this.current_id = this.id;
          // }
        })
    }

  ngOnInit() {
    this.mockDataService.getSearch();
    this.people = this.mockDataService.search_people;
    this.projects = this.mockDataService.search_projects;
    this.publications = this.mockDataService.search_publications;

  }

  ngDoCheck() {
    // if this.people is not null
    if (this.people !== undefined && this.projects !== undefined && this.publications !== undefined) {
      this.getSearch_people();
      this.getSearch_projects();
      this.getSearch_publications();
    }

  }

  getSearch_people() {
    var fuse = new Fuse(this.people, this.people_options); // "list" is the item array
    this.result_people = fuse.search(this.id);
  }
  getSearch_publications() {
    var fuse = new Fuse(this.publications, this.publications_options); // "list" is the item array
    this.result_publications = fuse.search(this.id);
  }
  getSearch_projects() {
    var fuse = new Fuse(this.projects, this.projects_options); // "list" is the item array
    this.result_projects = fuse.search(this.id);
  }

  routing(arg, id, diff = null) {
    if (arg == "person") {
      this.router.navigate(['/main/people/person', id])
    } else if ( arg == "publications") {
      switch(diff) {
          case "international":
            this.router.navigate(['main/publicate/individual', id])
            break;
          case "domestic":
            this.router.navigate(['main/publicate_kr/individual', id])
            break;
          case "thesis":
            this.router.navigate(['main/thesis/individual', id])
            break;
          default:
            break;
      }
    } else if ( arg == "projects") {
      this.router.navigate(['/main/projects/individual', id])
    }

  }
}

