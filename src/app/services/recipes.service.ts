import {  Injectable } from '@angular/core';
import { RecipeModule } from '../models/recipe/recipe.module';
import { ingridient } from '../shared/ingridient.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesSubject: BehaviorSubject<RecipeModule[]> = new BehaviorSubject<RecipeModule[]>([]);
  RecipeId:number
  Recipes: RecipeModule[] = [ new RecipeModule("omri",
  "omri-desc",
  "https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg",
  [new ingridient('olive',5),new ingridient('tometo',5)]),
 new RecipeModule("test","test-desc","https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1200",
 [new ingridient('bread',5),new ingridient('hamburger',5)])]

  
 constructor() { }

 getRecipesOnstart(){
  return  this.Recipes.slice()
 }
 getRecipes(): Observable<RecipeModule[]> {
  return this.recipesSubject.asObservable();
}

  
  getRecipesById(index:number){
    return this.Recipes[index];
  }
}
