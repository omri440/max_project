import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipes.service';
import { RecipeModule } from '../models/recipe/recipe.module';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ShopingListService } from './shoping-list.service';
import { ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorgeService {
  constructor(
    private http: HttpClient,
    private recipeSerivce: RecipesService,
    private authService: AuthService,
    private shopingListService: ShopingListService
  ) {}

  storeReicpes() {
    const recipes = this.recipeSerivce.getRecipesOnstart();
    this.http
      .put(
        'https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/recipes.json',
        recipes,
        {
          params: new HttpParams().set('auth', this.authService.token),
        }
      )
      .subscribe((cb) => {
        console.log(cb);
      });
  }

  fetchRecipes() {
    this.http
      .get<RecipeModule[]>(
        'https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/recipes.json',
        {
          params: new HttpParams().set('auth', this.authService.token),
        }
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingridients: recipe.ingridients ? recipe.ingridients : [],
            };
          }) as RecipeModule[];
        })
      )
      .subscribe((recipes) => {
        this.recipeSerivce.setRecipes(recipes);
        console.log(this.authService.token);
      });
  }

  ingriStore() {
    const ingridentsForSave = this.shopingListService.getingridients()
    this.http
      .put(
        'https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/ingridents.json',
        ingridentsForSave,
        {
          params: new HttpParams().set('auth', this.authService.token),
        }
      )
      .subscribe((cb) => {
        console.log(cb);
        alert('save succesfully')
      });
  }

  ingriFetch(){
  this.http
  .get<ingridient[]>(
    'https://ng-recipe-book-e9b48-default-rtdb.firebaseio.com/ingridents.json',
    {
      params: new HttpParams().set('auth', this.authService.token),
    }
  ).subscribe(
    ingridientListRes =>
    this.shopingListService.Addingris(ingridientListRes)
    
  )
}

}
