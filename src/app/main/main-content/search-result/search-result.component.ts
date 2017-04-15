import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './../../../shared/search.service';
import { Component, OnInit, Input } from '@angular/core';
import * as Fuse from 'fuse.js'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

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
        "teams_name",
        "people_name"
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
        "title",
        "teams_shortname",
        "people_name"
    ]
  } 
  subscription: Subscription;
  id: string;

  people:any;
  result_people:any;
  publications:any;
  result_publications:any;
  projects:any;
  result_projects:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private http:Http,
    private router:Router
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = param['id'];
        })
    }

  ngOnInit() {
    this.getMembers();
    this.getProjects();
    this.getPublications();
  }

  ngDoCheck() {
    // if this.people is not null
    if (this.people !== undefined && this.projects !== undefined && this.publications !== undefined) {
      this.getSearch_people();
      this.getSearch_projects();
      this.getSearch_publications();
    }
  }

  getMembers() {
    this.http.get('main/people-data')
    .map(res => res.json())
    .subscribe(items => {
      this.people = items;
    });
  }
  getProjects() {
     this.http.get('main/projects-data')
      .map(res => res.json())
      .subscribe(items => {
        this.projects = items;
      });
  }
  getPublications() {
     this.http.get('main/publication-data')
      .map(res => res.json())
      .subscribe(items => {
        this.publications = items;
      });
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

