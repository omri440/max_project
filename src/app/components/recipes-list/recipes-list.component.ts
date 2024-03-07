import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 Recipes: RecipeModule[] 
  constructor(private recipesServices:RecipesService) { }

  ngOnInit(): void {
    this.Recipes = this.recipesServices.getRecipes()
  }
}
