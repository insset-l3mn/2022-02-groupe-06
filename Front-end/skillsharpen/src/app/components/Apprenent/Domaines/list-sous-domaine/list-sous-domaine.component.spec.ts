import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSousDomaineComponent } from './list-sous-domaine.component';

describe('ListSousDomaineComponent', () => {
  let component: ListSousDomaineComponent;
  let fixture: ComponentFixture<ListSousDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSousDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSousDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
