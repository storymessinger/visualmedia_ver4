import { AboutSponserComponent } from './main-content/about-sponser/about-sponser.component';
import { SearchResultComponent } from './main-content/search-result/search-result.component';
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
import { AboutAdmissionComponent } from './main-content/about-admission/about-admission.component';
import { AboutInfoComponent } from './main-content/about-info/about-info.component';
import { MemberProfessorComponent } from './main-content/member-professor/member-professor.component';

import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [RouterModule.forChild([
        { 
            path: 'main',
            component: MainComponent,
            data: {},
            children: [
                {   path: 'info', 
                    component: AboutInfoComponent,
                    data: { breadcrumb: "About us" }
                },
                {   path: 'admission', 
                    component: AboutAdmissionComponent,
                    data: { breadcrumb: "Admission" }
                },
                {   path: 'partners', 
                    component: AboutPartnersComponent,
                    data: { breadcrumb: "Partners" }
                },
                {   path: 'sponsership', 
                    component: AboutSponserComponent,
                    data: { breadcrumb: "Sponsership" }
                },
                {   path: 'people', 
                    component: MemberStudentComponent,
                    data: { breadcrumb: "People" }, 
                    pathMatch: 'full'
                },
                {   path: 'people', 
                    data: { breadcrumb: "People" }, 
                    children: [
                        {   path: 'person/1', 
                            component: MemberProfessorComponent,
                            data: { breadcrumb: "Professor" }
                        },
                        {   path: 'person/:id', 
                            component: MemberStudentIndividualComponent,
                            data: { breadcrumb: "Individual Page" }
                        }
                    ]
                },
                {   path: 'area', 
                    component: ResearchAreaComponent, 
                    data: { breadcrumb: "Research Area" },
                    pathMatch: 'full'
                },
                {   path: 'area', 
                    data: { breadcrumb: "Research Area" }, 
                    children: [
                        {   path: 'teams/:id', 
                            component: ResearchAreaIndividualComponent,
                            data: { breadcrumb: "Teams" }
                        }
                    ]
                },
                {   path: 'projects', 
                    component: ResearchProjectsComponent, 
                    data: { breadcrumb: "Projects" }
                },
                {   path: 'projects', 
                    data: { breadcrumb: "Projects" }, 
                    children: [
                        {   path: 'individual/:id', 
                            component: ResearchProjectsIndividualComponent,
                            data: { breadcrumb: "Individual Project" }
                        }
                    ]
                },
                {   path: 'publicate', 
                    component: ResearchPublicateComponent, 
                    data: { breadcrumb: "Publications" }
                },
                {   path: 'publicate', 
                    data: { breadcrumb: "Publications" }, 
                    children: [
                        {   path: 'individual/:id', 
                            component: ResearchPublicateIndividualComponent,
                            data: { breadcrumb: "Individual" }
                        }
                    ]
                },
                {   path: 'publicate_kr', 
                    component: ResearchPublicateKrComponent, 
                    data: { breadcrumb: "Domestic" }
                },
                {   path: 'publicate_kr', 
                    data: { breadcrumb: "Domestic" }, 
                    children: [
                        {   path: 'individual/:id', 
                            component: ResearchPublicateIndividualComponent,
                            data: { breadcrumb: "Individual" }
                        }
                    ]
                },
                {   path: 'thesis', 
                    component: ResearchThesisComponent, 
                    data: { breadcrumb: "Thesis" }
                },
                {   path: 'thesis', 
                    data: { breadcrumb: "Thesis" }, 
                    children: [
                        {   path: 'individual/:id', 
                            component: ResearchPublicateIndividualComponent,
                            data: { breadcrumb: "Individual" }
                        }
                    ]
                },
                {   path: 'news', 
                    component: IssuesNewsComponent,
                    data: { breadcrumb: "Our News" }
                },
                {   path: 'media', 
                    component: IssuesMediaComponent, 
                    data: { breadcrumb: "In Media" }
                },
                {   path: 'life', 
                    component: IssuesLifeComponent, 
                    data: { breadcrumb: "Our Daily Life" }
                },
                {   path: 'downloads', 
                    component: ArchiveDownloadsComponent, 
                    data: { breadcrumb: "Downloads" },
                    pathMatch: 'full'
                },
                {   path: 'seminar', 
                    component: ArchiveSeminarComponent, 
                    data: { breadcrumb: "Seminar" },
                    pathMatch: 'full'
                },
                {   path: 'search/:id', 
                    component: SearchResultComponent,
                    data: { breadcrumb: "Search Result" },
                }

            ]
        }
    ])],
    exports: [RouterModule]
})

export class MainRoutingModule {}