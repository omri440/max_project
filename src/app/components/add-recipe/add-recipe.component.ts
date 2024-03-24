import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm, Form, FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {



  recipeFormNew: FormGroup ;
  recipename: string
  recipeDescriptionStart: string
  recipeImagePath: string
  ingridlist:ingridient[] =[]
  id: number ;
  editmode = false ;


  constructor(private route:ActivatedRoute, private recipeService:RecipesService,private router:Router) { }
  
  ngOnInit(): void { // check for edit mode by params 
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'] ;
      this.editmode = params['id'] != null;
      this.onInitForm()
    })
  }

   private onInitForm(){
    this.recipename = '';
    this.recipeDescriptionStart = '';
    this.recipeImagePath = '';
    let recipeIngridList = new FormArray([]) ;
    if (this.editmode){ // if it edit mode to inital the form with the exist recipe values 
      let recipe:RecipeModule = this.recipeService.getRecipesById(this.id)
      this.recipename = recipe.name
      this.recipeImagePath = recipe.imagePath
      this.recipeDescriptionStart = recipe.description
      if(recipe['ingridients']){
        for(let ingridient of recipe.ingridients){
          recipeIngridList.push(
            new FormGroup(
              {
                'name': new FormControl(ingridient.name,Validators.required),
                'amount': new FormControl(ingridient.amount,Validators.required)
              }
            )
          )
        }
      }

    }
    this.recipeFormNew = new FormGroup({ // in any case to give the form the form control and validtors
      'name': new FormControl(this.recipename,Validators.required),
      'Description': new FormControl(this.recipeDescriptionStart,Validators.required),
      'ImagePath': new FormControl(this.recipeImagePath,Validators.required),
      'ingridients': recipeIngridList
    })
  }
  onSubmit() { // 2 option for submit the form or edit mode and it will replace the exist recipe and the else if for new recipe 
     if(this.editmode){
      let editRecipe = this.recipeService.getRecipesById(this.id);
      editRecipe.name = this.recipeFormNew.value.name ;
      editRecipe.description = this.recipeFormNew.value.Description ;
      editRecipe.imagePath = this.recipeFormNew.value.ImagePath ;
      editRecipe.ingridients = this.recipeFormNew.value.ingridients ;
      this.recipeService.Recipes[this.id] = editRecipe;
      this.recipeFormNew.reset() ;
      this.router.navigate(['']) ;
     }
     else{
     let newRecipe = new RecipeModule(this.recipeFormNew.value.name,
      this.recipeFormNew.value.Description,
      this.recipeFormNew.value.ImagePath,
      this.recipeFormNew.value.ingridients);
      console.log(newRecipe) ; // print the recipe just for check 
      this.recipeService.Recipes.push(newRecipe) // add it to the recipes in this component
      this.recipeService.recipesSubject.next(this.recipeService.Recipes) // send next req to update it on the service 
      this.recipeFormNew.reset()
      this.router.navigate(['']);
      }
    }
    getcontrols() { // a method that implement to reach all the ingridents line in the form from the html file 
      return (<FormArray>this.recipeFormNew.get('ingridients')).controls;
    }

    onAddingridientLIne() {
      (<FormArray>this.recipeFormNew.get('ingridients')).push(
        new FormGroup(
          {
            'name': new FormControl(null,Validators.required),
            'amount': new FormControl(null)
          }
        )
      );
      }


    onDeleteIngridents(index:number){  //remove ingrident control from the Form array
      (<FormArray>this.recipeFormNew.get('ingridients')).removeAt(index)
    }


}
