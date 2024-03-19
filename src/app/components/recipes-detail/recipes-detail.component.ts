import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
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
  


  recipeDetails: RecipeModule
  id:number
  
  
  constructor(private shopinglistService: ShopingListService,private recipeService: RecipesService,
     private activeroute:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.activeroute.params.subscribe(
    (params:Params) => {
      this.id = +params['id']
      this.recipeDetails = this.recipeService.getRecipesById(this.id)
    }
    )
  }
  
  onAddIngridents(recipeDetails: RecipeModule) {
    for (let i of recipeDetails.ingridients){
      this.shopinglistService.ingridientlist.push(i)
    };
  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.activeroute});
    }

    ondeleteRecipe(){
      this.recipeService.onDeleteRecipe(this.id)
    }

}
