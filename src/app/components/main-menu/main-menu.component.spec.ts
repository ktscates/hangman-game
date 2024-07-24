import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { Router } from '@angular/router';

class MockRouter {
  navigate = jest.fn();
}

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;
  let mockRouter: MockRouter;

  beforeEach(async () => {
    mockRouter = new MockRouter();

    await TestBed.configureTestingModule({
      imports: [MainMenuComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to categories', () => {
    component.goToCategories();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/categories']);
  });

  it('should navigate to categories', () => {
    component.goToGuide();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/guide']);
  });
});
