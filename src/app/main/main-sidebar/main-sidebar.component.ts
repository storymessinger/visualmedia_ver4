import { ScrollAbleService } from '../../shared/scroll-able.service';
import {
  Component,
  Output,
  Input,
  EventEmitter,
  Directive,
  ElementRef,
  Renderer,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent {

  sbLinks: any[] = [
    {
      firstLink: ["about", "About"],
      secondLink: [
        { 
          url: "info",
          data: "About us",
          innerLink: []
        },
        { 
          url: "admission",
          data: "Admission",
          innerLink: []
        },
        { 
          url: "partners",
          data: "Partners",
          innerLink: []
        },
        { 
          url: "sponsorship",
          data: "Sponsorship",
          innerLink: []
        }
      ]
    },
    {
      firstLink: ["member", "People"],
      secondLink: [
        { 
          url: "people",
          data: "Faculty",
          scroll: "faculty",
        },
        { 
          url: "people",
          data: "Post Doctors",
          scroll: "post",
        },
        { 
          url: "people",
          data: "Ph.D Students",
          scroll: "phd",
        },
        { 
          url: "people",
          data: "Master Students",
          scroll: "master",
        },
        { 
          url: "people",
          data: "Researchers",
          scroll: "researcher",
        },
        { 
          url: "people",
          data: "Interns",
          scroll: "intern",
        },
        { 
          url: "people",
          data: "Ph.D Alumni",
          scroll: "alumni_phd",
        },
        { 
          url: "people",
          data: "Master Alumni",
          scroll: "alumni_master",
        },
        { 
          url: "people",
          data: "Former Members",
          scroll: "former",
        },
      ]
    },
    {
      firstLink: ["research", "Research"],
      secondLink: [
        { 
          url: "area",
          data: "Research Area",
          innerLink: []
        },
        { 
          url: "projects",
          data: "Projects",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "international",
          data: "Publications (Intl.)",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "domestic",
          data: "Publications (Domestic)",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "thesis",
          data: "Theses",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
    {
      firstLink: ["issues", "News and Events"],
      secondLink: [
        { 
          url: "news",
          data: "News",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "media",
          data: "Media Reports",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "life",
          data: "VML Life",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
    {
      firstLink: ["archive", "Archive", []],
      secondLink: [
        { 
          url: "seminar",
          data: "Weekly Seminars",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "downloads",
          data: "Downloads",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
  ]
  public activeLink:any;
  public subActiveLink:any;

  @Input() state;
  @Output() clicked = new EventEmitter<string>();
  
  constructor(public el:ElementRef, private scrollAbleService:ScrollAbleService){

  }

  setScroll(data) { 
    this.scrollAbleService.setScroll(data);
  }
  clearMessage() {
    this.scrollAbleService.clearMessage();
  }

  sidebarNavConnect() {
    this.state = !this.state;
    this.clicked.emit(this.state);
  }

  toggleMenu(data) {
    if (this.activeLink != data){
      this.activeLink = data;
    } else {
      this.activeLink = null;
    }
  }
  toggleSubMenu(data, scroll) {
    if (this.subActiveLink != data) {
      this.subActiveLink = data;
    } else {
      this.subActiveLink = null;
    }
    // if there is anything to scroll
    this.setScroll(scroll);
  }

  clickSubSubMenu(event, data) {
    // if there is anything to scroll
    this.setScroll(data);
    event.stopPropagation();
  }

}
