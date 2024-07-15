import { TestBed } from '@angular/core/testing';

import { HowToPlayService } from './how-to-play.service';

describe('HowToPlayService', () => {
  let service: HowToPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowToPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
