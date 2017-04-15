import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import { GoogleData } from './data/homepage.data';

@Injectable()
export class MockDataService {

  public downloads:any;
  public issues:any;
  public news:any;
  public medias:any;
  public people:any;
  public people_person:any;
  public publications:any;
  public publication_individual:any = [];
  public publications_int:any;
  public publications_kr:any;
  public publications_thesis:any;
  public projects:any;
  public projects_individual:any = [];
  public partners:any;
  public seminars:any;
  public researchArea:any = [];

  constructor() { }

  init(){

  }

  getSeminars() {
      this.seminars = _.values(_.groupBy(GoogleData.seminars,"date"));
  }

  getDownloads ():any {
      let sub= _.values(_.groupBy(GoogleData.downloads,"year")).reverse();
      this.downloads = sub.map( subArr => this.dateSort_descend(subArr));
  }

  
  // getResearchArea() {
  //   this.http.get('main/researchArea-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.researchArea = items;
  //     });
  // }



  // getMembers(id:number = null) {
  //   if(id) {
  //    this.http.get('main/people-data-person/' + id)
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.people_person = items;
  //     });
  //   } else {
  //    this.http.get('main/people-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.people = items;
  //     });
  //   }
    
  // }

  // getPartners() {
  //   this.http.get('main/partner-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.partners = items;
  //     })
  // }

  // getProjects(id:number = null) {
  //   if(id) {
  //    this.http.get('main/projects-data-individual/'+ id)
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       console.log('items: ' + items);
  //       this.projects_individual = items;
  //     });
  //   } else {
  //    this.http.get('main/projects-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let sub= _.values(_.groupBy(items,"year")).reverse();
  //       this.projects = sub.map( subArr => this.dateSort_descend(subArr));
  //     });
  //   }
  // }

  // getPublication(id:number = null) {
  //   if(id) {
  //    this.http.get('main/publication-data-individual/' + id)
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.publication_individual = items[0];
  //     })
  //   } else {
  //    this.http.get('main/publication-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let sub = _.values(_.groupBy(items,"year")).reverse();
  //       this.publications= sub.map( subArr => this.dateSort_descend(subArr));
  //       this.publications.forEach( items => {
  //         items.forEach( publication => {
  //           publication.people_name = publication.people_name.split(',');
  //           publication.people_id = publication.people_id.split(',');
  //         })
  //       })
  //     });
  //   }
  // }

  // getPublication_int() {
  //    this.http.get('main/publication-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let groupedPub = items.filter( item => item.type == 'international');
  //       let sub = _.values(_.groupBy(groupedPub,"year")).reverse();
  //       this.publications_int = sub.map( subArr => this.dateSort_descend(subArr));
  //       this.publications_int.forEach( items => {
  //         items.forEach( publication => {
  //           publication.people_name = publication.people_name.split(',');
  //           publication.people_id = publication.people_id.split(',');
  //         })
  //       })
  //     });
  // }

  // getPublication_kr() {
  //    this.http.get('main/publication-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let groupedPub = items.filter( item => item.type == 'domestic');
  //       let sub = _.values(_.groupBy(groupedPub,"year")).reverse();
  //       this.publications_kr= sub.map( subArr => this.dateSort_descend(subArr));
  //       this.publications_kr.forEach( items => {
  //         items.forEach( publication => {
  //           publication.people_name = publication.people_name.split(',');
  //           publication.people_id = publication.people_id.split(',');
  //         })
  //       })
  //     });
  // }

  // getPublication_thesis() {
  //    this.http.get('main/publication-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let groupedPub = items.filter( item => item.type == 'thesis');
  //       let sub = _.values(_.groupBy(groupedPub,"year")).reverse();
  //       this.publications_thesis= sub.map( subArr => this.dateSort_descend(subArr));
  //       this.publications_thesis.forEach( items => {
  //         items.forEach( publication => {
  //           publication.people_name = publication.people_name.split(',');
  //           publication.people_id = publication.people_id.split(',');
  //         })
  //       })
  //     });
  // }

  // getIssues():any {
  //   this.http.get('main/issues-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       let groupedIssues = _.groupBy(items, 'type');
  //       let subNews = _.values(_.groupBy(groupedIssues['news'],"year")).reverse();
  //       let subMedias = _.values(_.groupBy(groupedIssues['media'],"year")).reverse();

  //       this.news = subNews.map( subArr => this.dateSort_descend(subArr));
  //       this.medias = subMedias.map( subArr => this.dateSort_descend(subArr));
  //       this.issues = this.dateSort_descend(items);
        
  //     })
  // }

  dateSort_descend(input) {
    let ascend = _.chain(input)
                .sortBy( item => item['day'])
                .sortBy( item => item['month'])
                .sortBy( item => item['year'])
                .value();
    return ascend.reverse();
  }
}

