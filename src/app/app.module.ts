import { MockDataService } from './shared/mockdata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DefaultImageHomeDirective } from './shared/default-image-home.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { MainModule } from './main/main.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MaterialModule } from '@angular/material';
import { MatIconModule } from '@angular/material'
import { ScrollSpyModule } from 'ng2-scrollspy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VmlPanelComponent } from './shared/vml-panel/vml-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DefaultImageHomeDirective,
    VmlPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    routing,
    NgbModule.forRoot(), // Add Bootstrap module here.
    // MaterialModule,
    MatIconModule,
    ScrollSpyModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    MockDataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
