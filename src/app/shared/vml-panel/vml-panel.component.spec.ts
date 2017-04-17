import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmlPanelComponent } from './vml-panel.component';

describe('VmlPanelComponent', () => {
  let component: VmlPanelComponent;
  let fixture: ComponentFixture<VmlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
