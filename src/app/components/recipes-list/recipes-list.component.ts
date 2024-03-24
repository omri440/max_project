import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipesSubscription: Subscription;
  Recipes: RecipeModule[] ;
  constructor(private recipesServices:RecipesService ,private router:Router
    ,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.recipesSubscription = this.recipesServices.getRecipes().subscribe(recipes1 => {
      this.Recipes = recipes1;
      console.log(this.Recipes) ; // this for get recipes if there was change
    })
    this.Recipes = this.recipesServices.getRecipesOnstart() // this for get recipes on the first time we chrage the app

  
}
onAddRecipe() { // a method for navigate to add recipe component with new recipe
  this.router.navigate(['new'],{relativeTo:this.route});
  }
 

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.recipesSubscription.unsubscribe();
  }

}