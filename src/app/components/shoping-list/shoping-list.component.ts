import { Component, OnInit } from '@angular/core';
import { ShopingListService } from 'src/app/services/shoping-list.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingridientlist:ingridient[]
  constructor(private ShopingListService:ShopingListService) { }

  ngOnInit(): void {
    this.ingridientlist =this.ShopingListService.ingridientlist
  }

onAddingri(ingridient: ingridient) {
this.ShopingListService.Addingri(ingridient)
}
  
  
  
  

  
}
