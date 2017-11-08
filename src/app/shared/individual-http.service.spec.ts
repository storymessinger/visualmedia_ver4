import { TestBed, inject } from '@angular/core/testing';

import { IndividualHttpService } from './individual-http.service';

describe('IndividualHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualHttpService]
    });
  });

  it('should be created', inject([IndividualHttpService], (service: IndividualHttpService) => {
    expect(service).toBeTruthy();
  }));
});
