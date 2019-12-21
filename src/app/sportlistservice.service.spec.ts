import { TestBed } from '@angular/core/testing';

import { SportlistserviceService } from './sportlistservice.service';

describe('SportlistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportlistserviceService = TestBed.get(SportlistserviceService);
    expect(service).toBeTruthy();
  });
});
