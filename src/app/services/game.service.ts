import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameStateSubject = new BehaviorSubject<any>({
    maskedWord: [],
    remainingAttempts: 6,
    guessedLetters: [],
    isWin: false,
    isLose: false,
    word: '',
  });

  gameState$ = this.gameStateSubject.asObservable();
  categories: any = {};

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  startGame(category: string) {
    if (!this.categories[category]) {
      console.error(`No words found for category: ${category}`);
      return;
    }

    const words = this.categories[category].map((item: any) => item.name);
    if (!words.length) {
      console.error(`No words found for category: ${category}`);
      return;
    }

    const word = words[Math.floor(Math.random() * words.length)];
    const maskedWord = Array(word.length).fill('');

    this.gameStateSubject.next({
      maskedWord,
      remainingAttempts: 6,
      guessedLetters: [],
      isWin: false,
      isLose: false,
      word: word.toUpperCase(),
    });
  }

  guessLetter(letter: string) {
    const state = { ...this.gameStateSubject.value };

    if (state.guessedLetters.includes(letter)) {
      return;
    }

    state.guessedLetters.push(letter);

    const wordArray = state.word.split('');
    let correctGuess = false;

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === letter) {
        state.maskedWord[i] = letter;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      state.remainingAttempts--;
    }

    state.isWin = state.maskedWord.join('') === state.word;
    state.isLose = state.remainingAttempts === 0;

    this.gameStateSubject.next(state);
  }
}
