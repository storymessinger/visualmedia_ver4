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
  public publication_individual:any;
  // public publications_int:any;
  // public publications_kr:any;
  // public publications_thesis:any;
  public projects:any;
  public projects_individual:any; 
  public projects_individual_related:any;
  public partners:any;
  public seminars:any;
  public researchArea:any;
  public researchArea_all:any;
  public search_people:any;
  public search_projects:any;
  public search_publications:any;

  constructor() { }

  init(){

  }

  getSearch() {
    this.search_people = GoogleData.people;
    this.search_projects = GoogleData.projects;
    this.search_projects.forEach( project => {
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
    this.search_publications= GoogleData.publications;
    this.search_publications.forEach( pub => {
      // add people/authors
      pub['authors_array'] = [];
      if( pub['authors'].length > 0 ) {
        pub['authors'].forEach( authorid => {
          pub['authors_array']
            .push(GoogleData.people.find( person => person.id == authorid));
        })
      }
      // add teams
      const found_team = GoogleData.teams.find( team => team.id == pub.teams_id);
      if ( found_team !== undefined ) {
        pub['teams'] = {
          shortname: found_team.shortname
        };
      }
    })

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
      const idmatch_project = GoogleData.projects.find( pro => pro.id == id);

      let found_projects = [];
      if ( idmatch_project.fullname != "" ) {
        found_projects = GoogleData.projects.filter( pro => pro.fullname == idmatch_project.fullname );
      } 

      const found_people = GoogleData.people.find( person => person.id == idmatch_project.people_id);
      const found_team = GoogleData.teams.find( team => team.id == idmatch_project.teams_id);
      const found_funding = GoogleData.partners.find( partner => partner.id == idmatch_project.funding_id);
      if ( found_team !== undefined ) {
        idmatch_project['teams'] = {
          shortname: found_team.shortname,
          img: found_team.img
        };
      }
      if ( found_people !== undefined ) {
        idmatch_project['people'] = {
          name: found_people.name,
          img: found_people.img,
          id: found_people.id,
          email:found_people.email
        };
      }
      if ( found_funding !== undefined ) {
        idmatch_project['funding'] = {
          name: found_funding.name,
          img: found_funding.logo,
          link: found_funding.link
        };
      }

      this.projects_individual = idmatch_project;
      this.projects_individual_related = found_projects;

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

  getPublication(arg, id:number = null) {
    let publications;
    switch(arg) {
      case 'whole':
        publications = GoogleData.publications;
        break;
      case 'international':
        publications = GoogleData.publications.filter( pub => pub.type == 'international');
        break;

      case 'domestic':
        publications = GoogleData.publications.filter( pub => pub.type == 'domestic');
        break;
      case 'thesis':
        publications = GoogleData.publications.filter( pub => pub.type == 'thesis');
        break;
    }

    if(id) {
      console.log(publications);
      const found_publication = publications.find( pub => pub.id == id);
      console.log(found_publication);

      found_publication['authors_array'] = [];
      if( found_publication['authors'].length > 0 ) {
        found_publication['authors'].forEach( authorid => {
          found_publication['authors_array']
            .push(GoogleData.people.find( person => person.id == authorid));
        })
      }
      this.publication_individual = found_publication;
  } else {
    publications.forEach( pub => {
      // add people/authors
      pub['authors_array'] = [];
      if( pub['authors'].length > 0 ) {
        pub['authors'].forEach( authorid => {
          pub['authors_array']
            .push(GoogleData.people.find( person => person.id == authorid));
        })
      }
    })

    let sub = _.values(_.groupBy(publications,"year")).reverse();
    this.publications= sub.map( subArr => this.dateSort_descend(subArr));

    }
  }

  getResearchArea(id = null) {
    if(id){
      this.researchArea = GoogleData.teams.find( team => team.id == id);

      // add publications
      this.researchArea['publications_array'] = [];
      this.researchArea['publications'].forEach( pubid => {
        this.researchArea['publications_array']
          .push(GoogleData.publications
            .filter(pub => pub.type == 'international')
            .find( pub => pub.id == pubid));
      })

      // add people
      this.researchArea['people_array'] = GoogleData.people.filter( person => person.teams_id == id);
      // add projects
      this.researchArea['projects_array'] = GoogleData.projects.filter( pro => pro.teams_id == id);

    } else {
      this.researchArea_all = GoogleData.teams.slice(0,3);
    }
  }

  getPartners() {
    this.partners = _.groupBy(GoogleData.partners.filter( par => par.mou == 1 ), 'type');
  }

  dateSort_descend(input) {
    let ascend = _.chain(input)
                .sortBy( item => item['day'])
                .sortBy( item => item['month'])
                .sortBy( item => item['year'])
                .value();
    return ascend.reverse();
  }
}

