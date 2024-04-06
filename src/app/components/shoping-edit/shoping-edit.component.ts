import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, forkJoin } from 'rxjs';
import { ShopingListService } from 'src/app/services/shoping-list.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopingEditComponent implements OnInit,OnDestroy {


  @ViewChild('f',{static:false}) slForm:NgForm ;
  @Output() newIngrid:ingridient ;
  @Output() addNewingridEvent = new EventEmitter() ; // using event for add it to shoping list component
  editmode = false ;
  indexItemEdit:number ;
  subscription: Subscription ;
  itemToEdit:ingridient ;

  constructor(private slService:ShopingListService) { }
  
  
  ngOnInit(): void { // inital the slForm with the edit ingrident if we get event on ingridientIndexEdit else it inital with null
    this.subscription = this.slService.ingridientIndexEdit.subscribe((index) =>{
      this.editmode = true ;
      this.indexItemEdit = index ;
      this.itemToEdit = this.slService.getSingelingri(index) ;
      this.slForm.setValue({
        'name': this.itemToEdit.name,
        'amount': this.itemToEdit.amount
      });
    })
  }
  
  onAddItem(form:NgForm) { // using ngForm here because its the way of the porject to give me introduce with the 2 ways of forms 
    const value = form.value ;
    this.newIngrid = new ingridient(value.name,value.amount) ;
    if(this.editmode){
      this.slService.onUpdateIngri(this.indexItemEdit,this.newIngrid) ;
    }
    else{
      this.addNewingridEvent.emit(this.newIngrid) ;
    }
    this.editmode = false ;
    form.reset() ;
    
  }
  onClear() {
     this.slForm.reset() ;
     this.editmode = false ; 
    }

  onDelete() {
      this.slService.onDeleteingri(this.indexItemEdit) ;
      this.editmode = false ;
      this.slForm.reset() ;
    }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
