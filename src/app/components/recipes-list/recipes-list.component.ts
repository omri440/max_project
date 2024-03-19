import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  Recipes: RecipeModule[] 
  constructor(private recipesServices:RecipesService ,private router:Router
    ,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Recipes = this.recipesServices.getRecipes()
  }
  onAddRecipe() {
  this.router.navigate(['new'],{relativeTo:this.route});
  }




}
