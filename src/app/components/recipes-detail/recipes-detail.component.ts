import { Component, Input, OnInit } from '@angular/core';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';
import { ShopingListService } from 'src/app/services/shoping-list.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDetails: RecipeModule
  
  
  constructor(private shopinglistService: ShopingListService) { }
  
  ngOnInit(): void {
  }
  
  onAddIngridents(recipeDetails: RecipeModule) {
    for (let i of recipeDetails.ingridients){
      this.shopinglistService.ingridientlist.push(i)
    };
  }


}
