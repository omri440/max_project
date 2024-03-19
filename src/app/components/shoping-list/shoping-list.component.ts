import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ShopingListService } from 'src/app/services/shoping-list.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy{
  ingridientlist:ingridient[]
  private igChangeSub: Subscription 
  constructor(private ShopingListService:ShopingListService) { }

  ngOnInit(): void {
    this.ingridientlist =this.ShopingListService.getingridients();
   this.igChangeSub = this.ShopingListService.ingridientChanges.subscribe((ingridients:ingridient[]) =>
    {
     this.ingridientlist  = ingridients ;
    })
  }

  onAddingri(ingridient: ingridient) {
  this.ShopingListService.Addingris([ingridient])
  }

  ngOnDestroy(): void {
   this.igChangeSub.unsubscribe()
  }

  onEditItem(index:number){
    this.ShopingListService.ingridientIndexEdit.next(index)
  }
  
  
  
  

  
}
