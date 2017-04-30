import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfessorComponent } from './member-professor.component';

describe('MemberProfessorComponent', () => {
  let component: MemberProfessorComponent;
  let fixture: ComponentFixture<MemberProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
