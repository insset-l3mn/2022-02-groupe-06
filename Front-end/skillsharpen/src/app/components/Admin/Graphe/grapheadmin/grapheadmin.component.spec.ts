import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheadminComponent } from './grapheadmin.component';

describe('GrapheadminComponent', () => {
  let component: GrapheadminComponent;
  let fixture: ComponentFixture<GrapheadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapheadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
