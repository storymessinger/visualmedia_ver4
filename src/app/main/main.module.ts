import { MockDataService } from './../shared/mockdata.service';
import { AboutSponserComponent } from './main-content/about-sponser/about-sponser.component';
import { VideoThumbnailDirective } from './../shared/video-thumbnail.directive';
import { DefaultImageDirective } from './../shared/default-image.directive';
import { NumToMonthPipe } from './../shared/num-to-month.pipe';
import { PageScrollService } from 'ng2-page-scroll';

import { KeysPipe } from '../shared/keys-pipe';

import { ArchiveSeminarComponent } from './main-content/archive-seminar/archive-seminar.component';
import { ArchiveDownloadsComponent } from './main-content/archive-downloads/archive-downloads.component';
import { IssuesLifeComponent } from './main-content/issues-life/issues-life.component';
import { IssuesMediaComponent } from './main-content/issues-media/issues-media.component';
import { IssuesNewsComponent } from './main-content/issues-news/issues-news.component';
import { ResearchThesisComponent } from './main-content/research-thesis/research-thesis.component';
import { ResearchPublicateIndividualComponent } from './main-content/research-publicate-individual/research-publicate-individual.component';
import { ResearchPublicateKrComponent } from './main-content/research-publicate-kr/research-publicate-kr.component';
import { ResearchPublicateComponent } from './main-content/research-publicate/research-publicate.component';
import { ResearchProjectsIndividualComponent } from './main-content/research-projects-individual/research-projects-individual.component';
import { ResearchProjectsComponent } from './main-content/research-projects/research-projects.component';
import { ResearchAreaIndividualComponent } from './main-content/research-area-individual/research-area-individual.component';
import { ResearchAreaComponent } from './main-content/research-area/research-area.component';
import { MemberStudentIndividualComponent } from './main-content/member-student-individual/member-student-individual.component';
import { MemberStudentComponent } from './main-content/member-student/member-student.component';
import { AboutPartnersComponent } from './main-content/about-partners/about-partners.component';
import { AboutInfoComponent } from './main-content/about-info/about-info.component';
import { AboutAdmissionComponent } from './main-content/about-admission/about-admission.component';
import { SidebarBtnDirective } from './main-sidebar/sidebar-btn.directive';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SearchResultComponent } from './main-content/search-result/search-result.component';
import { ScrollAbleService } from '../shared/scroll-able.service';
import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ 
    MainComponent,
    MainNavbarComponent,
    MainSidebarComponent,
    SidebarBtnDirective,
    AboutAdmissionComponent,
    AboutInfoComponent,
    AboutPartnersComponent,
    MemberStudentComponent,
    MemberStudentIndividualComponent,
    ResearchAreaComponent,
    ResearchAreaIndividualComponent,
    ResearchProjectsComponent,
    ResearchProjectsComponent,
    ResearchProjectsIndividualComponent,
    ResearchPublicateComponent,
    ResearchPublicateKrComponent,
    ResearchPublicateIndividualComponent,
    ResearchThesisComponent,
    IssuesNewsComponent,
    IssuesMediaComponent,
    IssuesLifeComponent,
    ArchiveDownloadsComponent,
    ArchiveSeminarComponent,
    KeysPipe,
    NumToMonthPipe,
    DefaultImageDirective,
    VideoThumbnailDirective,
    SearchResultComponent,
    AboutSponserComponent,
    ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpModule, 
    MainRoutingModule,
    MaterialModule,
    MdIconModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    ScrollAbleService,
    PageScrollService,
    MockDataService]
})
export class MainModule { }
