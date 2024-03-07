import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  
  @ViewChild('ingridentName',{static:true}) ingridentName :ElementRef ;
  @ViewChild('ingridentAmount',{static:true}) ingridentAmount :ElementRef ;
  @Output() newIngrid =[];
  @Output() addNewingridEvent = new EventEmitter()
  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
  
    this.newIngrid.push(this.ingridentName.nativeElement.value)
    this.newIngrid.push(this.ingridentAmount.nativeElement.value)
    this.addNewingridEvent.emit(this.newIngrid)
    
  }




}
