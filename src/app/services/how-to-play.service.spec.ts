import { TestBed } from '@angular/core/testing';
import { HowToPlayService } from './how-to-play.service';

describe('QuizService', () => {
  let service: HowToPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowToPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    service.howToPlayData().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
