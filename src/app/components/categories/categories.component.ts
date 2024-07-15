import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable, map } from 'rxjs';
import { Category } from '../../model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categoryNames: string[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories: string[]) => {
        this.categoryNames = categories;
        console.log('categories', this.categoryNames);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  backBtn(): void {
    window.history.back();
  }
}
