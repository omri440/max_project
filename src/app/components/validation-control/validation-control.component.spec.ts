import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationControlComponent } from './validation-control.component';

describe('ValidationControlComponent', () => {
  let component: ValidationControlComponent;
  let fixture: ComponentFixture<ValidationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
