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
  
  getIssues():any {
        let groupedIssues = _.groupBy(GoogleData.issues, 'type');
        let subNews = _.values(_.groupBy(groupedIssues['news'],"year")).reverse();
        let subMedias = _.values(_.groupBy(groupedIssues['media'],"year")).reverse();

        this.issues = this.dateSort_descend(GoogleData.issues);
        this.news = subNews.map( subArr => this.dateSort_descend(subArr));
        this.medias = subMedias.map( subArr => this.dateSort_descend(subArr));
  }

  getMembers(id:number = null) {
    if(id) {
      const found_person= GoogleData.people.find( person => person.id == id);
      // add projects
      GoogleData.projects.forEach( pro => {
        if ( pro.people_id == found_person.id ) {
          found_person['projects'] = {
            name: pro.name,
            year: pro.year,
            // img: pro.img
          }
        }
      })
      // add seminars 
        //
      found_person['seminars'] = [];
        //
      GoogleData.seminars.forEach( sem => {
        if ( sem.people_id == found_person.id ) {
          found_person['seminars'].push({
            title: sem.title,
            link: sem.link
          })
        }
      })
      // add publications
        //
      found_person['publications'] = [];
        //
      GoogleData.publications.forEach( pub => {

        if (pub.authors instanceof Array) {
          const arr:any[] = pub.authors; // 1 2 11 23
          if(arr.some( item => item == found_person.id)) {  // 1 2 11 23 == 2 
            found_person['publications'].push({
              title: pub.title,
              conference: pub.conference
            })
          }
        } else {
          if ( pub.authors == found_person.id) {
            found_person['publications'].push({
              title: pub.title,
              conference: pub.conference
            })
          }
        }
      })

      this.people_person = found_person;

    } else {
      this.people = _.groupBy(GoogleData.people, 'type');
    }
  }


  getProjects(id:number = null) {
    if(id) {
    //  this.http.get('main/projects-data-individual/'+ id)
    //   .map(res => res.json())
    //   .subscribe(items => {
    //     console.log('items: ' + items);
    //     this.projects_individual = items;
    //   });
  } else {
    const projects = GoogleData.projects;

    projects.forEach( project => {
      const found_team = GoogleData.teams.find( team => team.id == project.teams_id);
      const found_people = GoogleData.people.find( person => person.id == project.people_id);
      const found_funding = GoogleData.partners.find( partner => partner.id == project.funding_id);
      if ( found_team !== undefined ) {
        project['teams'] = {
          shortname: found_team.shortname
        };
      }
      if ( found_people !== undefined ) {
        project['people'] = {
          name: found_people.name
        };
      }
      if ( found_funding !== undefined ) {
        project['funding'] = {
          name: found_funding.name,
          link: found_funding.link
        };
      }
    })
    let sub = _.values(_.groupBy(projects, "year")).reverse();
    this.projects = sub.map( subArr => this.dateSort_descend(subArr));
    }
  }



  // getResearchArea() {
  //   this.http.get('main/researchArea-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.researchArea = items;
  //     });
  // }


  // getPartners() {
  //   this.http.get('main/partner-data')
  //     .map(res => res.json())
  //     .subscribe(items => {
  //       this.partners = items;
  //     })
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


  dateSort_descend(input) {
    let ascend = _.chain(input)
                .sortBy( item => item['day'])
                .sortBy( item => item['month'])
                .sortBy( item => item['year'])
                .value();
    return ascend.reverse();
  }
}

