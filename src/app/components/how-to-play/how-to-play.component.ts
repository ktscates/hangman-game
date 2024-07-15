import { Component, OnInit } from '@angular/core';
import { GameGuide } from '../../model';
import { HowToPlayService } from '../../services/how-to-play.service';

@Component({
  selector: 'app-how-to-play',
  standalone: true,
  imports: [],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.css',
})
export class HowToPlayComponent implements OnInit {
  gameGuide: GameGuide[] = [];

  constructor(private howToPlayService: HowToPlayService) {}

  ngOnInit(): void {
    this.howToPlayService.howToPlayData().subscribe(
      (guides: GameGuide[]) => {
        this.gameGuide = guides;
        console.log('categories', this.gameGuide);
      },
      (error) => {
        console.error('Error fetching guides:', error);
      }
    );

    console.log('guides', this.gameGuide);
  }

  backBtn(): void {
    window.history.back();
  }
}
