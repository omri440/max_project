import { Component, OnInit,Input, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit{
  @Input() errorMessage: string;
  @Output() close = new EventEmitter<void>()
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onclose(){
    this.close.emit()
  }
}
