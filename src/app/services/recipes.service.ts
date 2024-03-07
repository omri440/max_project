import { EventEmitter, Injectable } from '@angular/core';
import { RecipeModule } from '../models/recipe/recipe.module';
import { ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  Recipes: RecipeModule[] = [new RecipeModule("omri",
  "omri-desc",
  "https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg",
  [new ingridient('olive',5),new ingridient('tometo',5)]),
 new RecipeModule("test","test-desc","https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1200",
 [new ingridient('bread',5),new ingridient('hamburger',5)])]
 RecipeSelect = new EventEmitter<RecipeModule>()
  
 constructor() { }

  getRecipes(){
    return this.Recipes.slice();
  }

  onSelectedRecipe(recipe:RecipeModule){
    this.RecipeSelect.emit(recipe)
  }
}
