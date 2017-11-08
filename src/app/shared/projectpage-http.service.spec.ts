import { TestBed, inject } from '@angular/core/testing';

import { ProjectpageHttpService } from './projectpage-http.service';

describe('ProjectpageHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectpageHttpService]
    });
  });

  it('should be created', inject([ProjectpageHttpService], (service: ProjectpageHttpService) => {
    expect(service).toBeTruthy();
  }));
});
