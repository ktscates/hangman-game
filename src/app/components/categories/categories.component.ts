import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryNames: string[] = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        // Ensure categories is an object and extract keys
        if (typeof categories === 'object' && !Array.isArray(categories)) {
          this.categoryNames = Object.keys(categories);
        } else {
          console.error(
            'Received categories data is not an object:',
            categories
          );
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  startGame(category: string): void {
    this.router.navigate(['/game', category]);
  }

  backBtn(): void {
    window.history.back();
  }
}
