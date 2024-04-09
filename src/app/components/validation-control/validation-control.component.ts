import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-control',
  templateUrl: './validation-control.component.html',
  styleUrls: ['./validation-control.component.css']
})
export class ValidationControlComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  get error() {
    if (this.control.errors && this.control.touched) {
      return this.errorMessage;
    }
    return null;
  }
}
