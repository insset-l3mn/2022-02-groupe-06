import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChapitreComponent } from './liste-chapitre.component';

describe('ListeChapitreComponent', () => {
  let component: ListeChapitreComponent;
  let fixture: ComponentFixture<ListeChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChapitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
