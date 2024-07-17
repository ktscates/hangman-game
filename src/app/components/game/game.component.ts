import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
  form!: FormGroup;
  gameState: any;
  category!: string;
  showModal: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      letter: [''],
    });

    this.category = this.route.snapshot.paramMap.get('category')!;
    this.gameService.gameState$.subscribe((state) => {
      this.gameState = state;

      if (state.isWin || state.isLose) {
        this.showModal = true;
      }
    });

    if (Object.keys(this.gameService.categories).length) {
      this.gameService.startGame(this.category);
    } else {
      this.gameService.categories.subscribe(() => {
        this.gameService.startGame(this.category);
      });
    }
  }

  guessLetter(letter: string) {
    if (this.form.valid) {
      this.gameService.guessLetter(letter.toUpperCase());
      this.form.reset();
    }
  }

  pauseGame() {
    this.showModal = true;
  }

  resumeGame() {
    this.showModal = false;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  closeModal() {
    this.showModal = false;
  }

  resume() {
    this.resumeGame();
  }

  newCategory() {
    this.router.navigate(['/categories']);
  }

  quit() {
    this.router.navigate(['/']);
  }
}
