import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayComponent } from './how-to-play.component';

describe('HowToPlayComponent', () => {
  let component: HowToPlayComponent;
  let fixture: ComponentFixture<HowToPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToPlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize based on the route parameter', () => {
    component.ngOnInit();
    expect(component.gameGuide.length).toBeGreaterThan(0);
    expect(component.gameGuide[0].title).toBe('Choose a Category');
    expect(component.gameGuide[1].title).toBe('Guess letters');
    expect(component.gameGuide[2].title).toBe('Win or lose');
  });

  it('should go back', () => {
    jest.spyOn(window.history, 'back');
    component.backBtn();
    expect(window.history.back).toHaveBeenCalled();
  });
});
