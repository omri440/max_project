import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipes.service';
import { RecipeModule } from '../models/recipe/recipe.module';
import { map } from 'rxjs/operators';
import { ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorgeService {
  constructor(private http: HttpClient, private recipeSerivce:RecipesService) { }

  storeReicpes(){
    const recipes = this.recipeSerivce.getRecipesOnstart()
    this.http.put('https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/recipes.json',
    recipes).subscribe( cb =>{
      console.log(cb)
    })
  }

  fetchRecipes(){
    this.http.get<RecipeModule[]>('https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe,ingridients:recipe.ingridients ? recipe.ingridients: []}
      }) as RecipeModule[]
    }))
    .subscribe(
      recipes => {
        this.recipeSerivce.setRecipes(recipes)
      }
    )
  }
}
