import { Injectable } from '@angular/core';
import { CATEGORIES } from '../../data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAllCategories(): Observable<any> {
    return of(CATEGORIES);
  }
}
