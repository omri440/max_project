import { Injectable } from '@angular/core';
import { ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  ingridientlist =[new ingridient('test',6)] 

  constructor() { }

  Addingri(newIngridient: ingridient) {
    this.ingridientlist.push(new ingridient(newIngridient.name,newIngridient.amount))
    }
}
