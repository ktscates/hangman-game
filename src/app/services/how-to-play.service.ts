import { Injectable } from '@angular/core';
import { GUIDE } from '../../data';
import { Observable, of } from 'rxjs';
import { GameGuide } from '../model';

@Injectable({
  providedIn: 'root',
})
export class HowToPlayService {
  constructor() {}

  howToPlayData(): Observable<GameGuide[]> {
    return of(GUIDE);
  }
}
