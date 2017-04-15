import { PublicationsService } from './../../../shared/publications.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ResearchAreaService } from './../../../shared/researchArea.service';
import { MemberService } from './../../../shared/member.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-research-area-individual',
  templateUrl: './research-area-individual.component.html',
  styleUrls: ['./research-area-individual.component.scss']
})
export class ResearchAreaIndividualComponent implements OnInit, DoCheck{

  imgPath = "../../../../assets/imgs/people/";
  mainImgPath = "../../../../assets/imgs/researchArea/";


  datas:any;
  memberId:any;
  people:any;
  paperNames:any;
  team:any;
  private subscription: Subscription;

  constructor(
    private researchAreaService:ResearchAreaService, 
    private memberService:MemberService,
    private publicationsService:PublicationsService,
    private activatedRoute:ActivatedRoute
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.team= param['id'];
        })

  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.datas= this.researchAreaService.getResearchArea(this.team);

    this.memberId = this.datas["members"].split("+");
    this.people = this.memberId.map( id => this.memberService.getMembers(parseInt(id)));

    const papers = this.publicationsService.getPublicationsByTeam(this.team);
    this.paperNames = papers.map( paper => paper.title);
  }

}
