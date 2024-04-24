import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-satrtingrecipe',
  templateUrl: './satrtingrecipe.component.html',
  styleUrls: ['./satrtingrecipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatrtingrecipeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
