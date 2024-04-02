import { Injectable } from '@angular/core';
import { ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  ingridientlist =[] ;
  ingridientChanges = new Subject <ingridient[]>();
  ingridientIndexEdit = new Subject <number>();

  constructor() { }

  getingridients(){
    return this.ingridientlist.slice() ;
  }

  Addingri(newIngridient: ingridient) { // add new ingrident
    this.ingridientlist.push(new ingridient(newIngridient.name,newIngridient.amount))
    }
    Addingris(newIngridients: ingridient[]) { // add ingridents from the recipe to shoping list 
      console.log(newIngridients) ;
      this.ingridientlist.push(...newIngridients) ;
      this.ingridientChanges.next(this.ingridientlist.slice()) ;
      }

    getSingelingri(index:number){ 
      return this.ingridientlist[index] ;
    }
    onUpdateIngri(index:number,ingridient:ingridient){
      this.ingridientlist[index] =  ingridient ;
      this.ingridientChanges.next(this.ingridientlist.slice()) ;


    }
    onDeleteingri(index:number){
      this.ingridientlist.splice(index,1) ;
      this.ingridientChanges.next(this.ingridientlist.slice()) ;
      }

    }

//

