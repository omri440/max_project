import {  Injectable } from '@angular/core';
import { RecipeModule } from '../models/recipe/recipe.module';
import { ingridient } from '../shared/ingridient.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataStorgeService } from './data-storge.service';



@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipesSubject: BehaviorSubject<RecipeModule[]> = new BehaviorSubject<RecipeModule[]>([]);
  RecipeId:number ;
  Recipes: RecipeModule[] = []
//   [ new RecipeModule("omri",
//   "omri-desc",
//   "https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg",
//   [new ingridient('olive',5),new ingridient('tometo',5)]),
  
//  new RecipeModule("test"
//  ,"test-desc"
//  ,"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1200",
//  [new ingridient('bread',5),new ingridient('hamburger',5)])] ;

  
 constructor(private router:Router) { }

 setRecipes(recipes:RecipeModule[]){
  this.Recipes = recipes ;
  this.recipesSubject.next(this.Recipes.slice()) ;
 }

 getRecipesOnstart(){// get recipe in first time
  return  this.Recipes ;
 }
 getRecipes(): Observable<RecipeModule[]> { // get reicpes when we have change
  return this.recipesSubject.asObservable() ;
}

  
  getRecipesById(index:number){ // get recipes by id 
    return this.Recipes[index] ;
  }
  onDeleteRecipe(index:number) { //delete item and navigate back
    this.Recipes.splice(index,1) ;
    this.recipesSubject.next(this.Recipes) ;
    this.router.navigate(['']) ;
   }
}
