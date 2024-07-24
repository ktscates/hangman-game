import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameService } from '../../services/game.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        GameComponent,
        ModalComponent,
        ReactiveFormsModule,
        CommonModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: GameService, useValue: {} }, // Mocking GameService
        { provide: Router, useValue: { navigate: jest.fn() } }, // Mocking Router
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: { get: jest.fn().mockReturnValue('testCategory') },
            },
          },
        }, // Mocking ActivatedRoute
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.contains('letter')).toBe(true);
  });
});
