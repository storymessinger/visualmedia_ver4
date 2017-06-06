import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from './shared/mockdata.service';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      This Page is not found 
    </p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  private subscription:Subscription;
  private snapshot:any;

  private redirect:any;
  private found:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private mockDataService:MockDataService
  ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.snapshot = activatedRoute.snapshot.url;
        })

  }

  ngOnInit() {

    this.redirect = this.mockDataService.redirect;

    this.found = this.redirect.find( item => {
      return item.old == this.snapshot.join('/') 
    }) 

    if(this.found == undefined) {
      //relocate to old homepage, with original address
      window.location.href="http://vml2.kaist.ac.kr/" + this.snapshot.join('/');
    } else {
      //relocate to new homepage, with different address
      window.location.href= this.found.new;
    }

  }

}
