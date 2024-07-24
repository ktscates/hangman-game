import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GameService } from './game.service';
import { CategoryService } from './category.service';

class MockCategoriesService {
  getAllCategories() {
    return of({
      Movies: [{ name: 'The Godfather', selected: false }],
      'TV Shows': [{ name: 'Breaking Bad', selected: false }],
      Countries: [{ name: 'Australia', selected: false }],
      'Capital Cities': [{ name: 'Tokyo', selected: false }],
      Animals: [{ name: 'Elephant', selected: false }],
      Sports: [{ name: 'Soccer', selected: false }],
    });
  }
}

describe('GameService', () => {
  let service: GameService;
  let mockCategoriesService: MockCategoriesService;

  beforeEach(() => {
    mockCategoriesService = new MockCategoriesService();

    TestBed.configureTestingModule({
      providers: [
        GameService,
        { provide: CategoryService, useValue: mockCategoriesService },
      ],
    });

    service = TestBed.inject(GameService);
  });

  it('should to be create', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize categories on construct', () => {
    expect(service.categories.Movies.length).toBeGreaterThan(0);
    expect(service.categories['TV Shows'].length).toBeGreaterThan(0);
    expect(service.categories.Countries.length).toBeGreaterThan(0);
    expect(service.categories['Capital Cities'].length).toBeGreaterThan(0);
    expect(service.categories.Animals.length).toBeGreaterThan(0);
    expect(service.categories.Sports.length).toBeGreaterThan(0);
  });

  it('should start the game with a valid category', () => {
    service.startGame('Movies');
    service.gameState$.subscribe((state) => {
      expect(state.word.length).toBeGreaterThan(0);
      expect(state.maskedWord.length).toBe(
        service['gameStateSubject'].value.word
      );
      expect(state.remainingAttempts).toEqual(0);
      expect(state.guessedLetters.length).toEqual(0);
      expect(state.isWin).toBe(false);
      expect(state.isLose).toBe(false);
    });
  });

  it('should handle incorrect category', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    service.startGame('invalid-category');
    expect(errorSpy).toHaveBeenCalledWith(
      'No words found for category: invalid-category'
    );
  });

  it('should handle category with no words', () => {
    const emptyWords = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    service.categories = mockCategoriesService.getAllCategories();
    service.startGame('EmptyCategory');

    expect(emptyWords).toHaveBeenCalledWith(
      'No words found for category: EmptyCategory'
    );
    expect(service['gameStateSubject'].value.word).toBe('');
  });

  it('should guess a correct letter', () => {
    service.startGame('Movies');
    const word = service['gameStateSubject'].value.word;
    service.guessLetter('A');
    expect(word).toContain('A');
    expect(service['gameStateSubject'].value.maskedWord).toContain('A');
  });

  it('should guess a incorrect letter', () => {
    service.startGame('Movies');
    const word = service['gameStateSubject'].value.word;
    service.guessLetter('Z');
    expect(word).not.toContain('Z');
    expect(service['gameStateSubject'].value.maskedWord).not.toContain('Z');
  });
});
