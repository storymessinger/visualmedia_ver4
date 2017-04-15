import { DataService } from './../../shared/data.service';
import { Component, Output, Input, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router'; 
import "rxjs/add/operator/filter";

declare var TweenLite, TweenMax, TimelineLite, TimeliteMax, Ease, Power3, ScrollMagic :any;

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit { 

  //imgs
  public relPath:string = "./assets/";
  public logoIconPath:string = this.relPath + "imgs/logo-white.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_white_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_white_36px.svg";

  //
  breadcrumbs:IBreadcrumb[];
  myChildren:any;
  @ViewChild("myInput")
  private _inputElement: ElementRef;

  constructor( 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private el:ElementRef,
    private dataService:DataService
    ) {

      this.breadcrumbs = [];
  }

  @Input() state;
  @Output() sidebarClick = new EventEmitter<string>();

  tl_btn:any;
  tl_search:any;
  tl_navbar:any;

  ngOnInit() {

    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
    //subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });

    this.tl_btn = new TimelineLite({paused:true})
      .set('.open-search', { display: "none" })
      .set('.close-search', { display: "unset" })
    this.tl_search = new TimelineLite({paused:true})
      .set('.search', { display: "unset" })
      .to( '.breadcrumb', 0.9, {
        opacity: "0"
      })
      .to( '.search', 1, {
        opacity: "1"
      })

    this.tl_navbar = new TimelineLite()
      .from( '#navbar-animation', 1.5, {
        backgroundColor: "#fafafa",
        boxShadow: "0 1.5px 4px rgba(0,0,0,0.05)",
        right: "100vw",
        ease: Power3.easeOut
      })
      .from ('.breadcrumb', 0.3, {
        opacity:0
      })

    this.tl_navbar.play()
  }

  tweenSearch() {
    this.tl_btn.play();
    this.tl_search.play();
    // auto focus (why not work?)
    this._inputElement.nativeElement.focus();
    // clear away the value
    this._inputElement.nativeElement.value = null;
  }
  closeSearch(){
    this.tl_btn.reverse();
    this.tl_search.reverse();
  }
  
  startSearch(event) { 
    this.closeSearch();
    this.router.navigate(['/main/search', event.target.value]);
  }

  onClicked() {
    this.state = !this.state;
    this.sidebarClick.emit(this.state);
  }

  ////

  getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]):IBreadcrumb[] {

    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;
    this.myChildren = children;


    //return if there are no more children
    if (children.length === 0 || children === null) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      if (url.slice(-1) === '/') { url = url.slice(0,-1); } //polyfill
      url += `/${routeURL}`;

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };

      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;

  }



}
