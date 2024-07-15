import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CategoriesComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  goToCategories(): void {
    this.router.navigate(['/categories']);
  }
  goToGuide(): void {
    this.router.navigate(['/guide']);
  }
}
