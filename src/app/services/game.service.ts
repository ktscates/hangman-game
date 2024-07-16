import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameStateSubject = new BehaviorSubject<any>({
    maskedWord: '',
    remainingAttempts: 6,
    guessedLetters: [],
    isWin: false,
    isLose: false,
  });

  gameState$ = this.gameStateSubject.asObservable();
  categories: any = {}; // Initialize with an empty object

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
    console.log('masked', maskedWord);
    console.log('word', word);

    this.gameStateSubject.next({
      maskedWord,
      remainingAttempts: 6,
      guessedLetters: [],
      isWin: false,
      isLose: false,
      word,
    });
  }

  guessLetter(letter: string) {
    const state = { ...this.gameStateSubject.value }; // Make a copy of the current state

    // Check if the letter has already been guessed
    if (state.guessedLetters.includes(letter)) {
      return;
    }

    // Add the letter to the guessedLetters array
    state.guessedLetters.push(letter);

    // Check if the guessed letter is in the word
    const wordArray = state.word.toUpperCase().split('');
    let correctGuess = false;

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === letter) {
        state.maskedWord[i] = letter;
        correctGuess = true;
      }
    }

    // Update the gameStateSubject with the updated state
    this.gameStateSubject.next({
      ...state,
      remainingAttempts: state.remainingAttempts - (correctGuess ? 0 : 1),
      isWin: state.maskedWord.join('') === state.word, // Check if the word is completely revealed
      isLose: state.remainingAttempts === 0, // Check if no attempts are remaining
    });
  }
}
