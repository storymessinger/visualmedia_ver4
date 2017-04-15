import { TestBed, inject } from '@angular/core/testing';

import { MockdataService } from './mockdata.service';

describe('MockdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockdataService]
    });
  });

  it('should ...', inject([MockdataService], (service: MockdataService) => {
    expect(service).toBeTruthy();
  }));
});
