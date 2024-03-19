import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatrtingrecipeComponent } from './satrtingrecipe.component';

describe('SatrtingrecipeComponent', () => {
  let component: SatrtingrecipeComponent;
  let fixture: ComponentFixture<SatrtingrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatrtingrecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatrtingrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
