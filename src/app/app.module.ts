import { ResearchAreaService } from './shared/researchArea.service';
import { IssuesService } from './shared/Issues.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { MainModule } from './main/main.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { ScrollSpyModule } from 'ng2-scrollspy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    routing,
    NgbModule.forRoot(), // Add Bootstrap module here.
    MaterialModule,
    ScrollSpyModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    IssuesService, 
    ResearchAreaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
