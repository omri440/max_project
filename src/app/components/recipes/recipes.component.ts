import { Component, OnInit, Output } from '@angular/core';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 recipeDetails: RecipeModule

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.RecipeSelect.subscribe((recipe) => {
      this.recipeDetails =recipe 
    })
  }

}
