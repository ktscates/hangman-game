import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default inputs', () => {
    expect(component.word).toBe('');
    expect(component.isWin).toBe(false);
    expect(component.isLose).toBe(false);
  });

  it('should resume when continue is called', () => {
    const resumeSpy = jest.spyOn(component.resume, 'emit');
    component.continue();
    expect(resumeSpy).toHaveBeenCalled();
  });

  it('should go to new category when picKNewCategory is called', () => {
    const newCategorySpy = jest.spyOn(component.newCategory, 'emit');
    component.pickNewCategory();
    expect(newCategorySpy).toHaveBeenCalled();
  });

  it('should quit when onQuit is called', () => {
    const quitSpy = jest.spyOn(component.quit, 'emit');
    component.onQuit();
    expect(quitSpy).toHaveBeenCalled();
  });
});
