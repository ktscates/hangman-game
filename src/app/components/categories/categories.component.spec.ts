import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { CategoryService } from '../../services/category.service';

class MockRouter {
  navigate = jest.fn();
}

class MockCategoryService {
  getAllCategories() {
    return of({
      Movies: [{ name: 'The Godfather', selected: false }],
      'TV Shows': [{ name: 'Breaking Bad', selected: false }],
      Countries: [{ name: 'Australia', selected: false }],
    });
  }
}

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let mockRouter: MockRouter;
  let mockCategoryService: MockCategoryService;

  beforeEach(async () => {
    mockRouter = new MockRouter();
    mockCategoryService = new MockCategoryService();

    await TestBed.configureTestingModule({
      imports: [CategoriesComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: CategoryService, useValue: mockCategoryService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize based on the route parameter', () => {
    component.ngOnInit();
    expect(component.categoryNames.length).toBeGreaterThan(0);
    expect(component.categoryNames).toEqual([
      'Movies',
      'TV Shows',
      'Countries',
    ]);
  });

  it('should navigate to start game', () => {
    const category = 'Movies';
    component.startGame(category);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/game', category]);
  });

  it('should go back', () => {
    const historySpy = jest.spyOn(window.history, 'back');
    component.backBtn();
    expect(historySpy).toHaveBeenCalled();
  });
});
