import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandCarreComponent } from './grand-carre.component';

describe('GrandCarreComponent', () => {
  let component: GrandCarreComponent;
  let fixture: ComponentFixture<GrandCarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCarreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
