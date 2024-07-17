import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() word: string = '';
  @Input() isWin: boolean = false;
  @Input() isLose: boolean = false;

  @Output() resume = new EventEmitter<void>();
  @Output() newCategory = new EventEmitter<void>();
  @Output() quit = new EventEmitter<void>();

  continue() {
    this.resume.emit();
  }

  pickNewCategory() {
    this.newCategory.emit();
  }

  onQuit() {
    this.quit.emit();
  }
}
