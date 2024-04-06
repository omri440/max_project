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

  public recipesSubject: BehaviorSubject<RecipeModule[]> = new BehaviorSubject<RecipeModule[]>([]);
  public RecipeId:number ;
  public Recipes: RecipeModule[] = []

  
 constructor(private router:Router) { }

 setRecipes(recipes:RecipeModule[]){ // set this method for use it in data storage service when we fetch post from fire base so wi will initail the recipe array 
  this.Recipes = recipes ;
  this.recipesSubject.next(this.Recipes.slice()) ;
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
    this.router.navigate(['recipes']) ;
   }
}
