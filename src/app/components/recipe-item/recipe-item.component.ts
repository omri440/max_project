import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModule
  
  
  constructor(private recipeService: RecipesService) { }
  
  ngOnInit(): void {
  }
  
  onSelected() {
    this.recipeService.onSelectedRecipe(this.recipe)
  };
  }

