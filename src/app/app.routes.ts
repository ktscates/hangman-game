import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'guide', component: HowToPlayComponent },
  { path: 'game/:category', component: GameComponent },
];
