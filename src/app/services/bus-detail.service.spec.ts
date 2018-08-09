import { TestBed, inject } from '@angular/core/testing';

import { BusDetailService } from './bus-detail.service';

describe('BusDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusDetailService]
    });
  });

  it('should be created', inject([BusDetailService], (service: BusDetailService) => {
    expect(service).toBeTruthy();
  }));
});
