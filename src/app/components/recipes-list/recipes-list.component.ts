import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipesSubscription: Subscription;
  Recipes: RecipeModule[] ;
  constructor(private recipesServices:RecipesService ,private router:Router
    ,private route: ActivatedRoute,private cdr: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.recipesSubscription = this.recipesServices.getRecipes().subscribe(recipes => {
      this.Recipes = recipes;
      this.cdr.detectChanges();
    }) // this for get recipes on the first time we chrage the app
}
onAddRecipe() { // a method for navigate to add recipe component with new recipe
  this.router.navigate(['new'],{relativeTo:this.route});
  }
 

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.recipesSubscription.unsubscribe();
  }

  trackBy(index: number, item): number {
    return item.id;
  }

}