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
  
  ngOnInit(): void {
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
    let recipeIngridList = new FormArray([])
    if (this.editmode){
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
    this.recipeFormNew = new FormGroup({
      'name': new FormControl(this.recipename,Validators.required),
      'Description': new FormControl(this.recipeDescriptionStart,Validators.required),
      'ImagePath': new FormControl(this.recipeImagePath,Validators.required),
      'ingridients': recipeIngridList
    })
  }
  onSubmit() {
     if(this.editmode){
      let editRecipe = this.recipeService.getRecipesById(this.id);
      editRecipe.name = this.recipeFormNew.value.name
      editRecipe.description = this.recipeFormNew.value.Description
      editRecipe.imagePath = this.recipeFormNew.value.ImagePath
      editRecipe.ingridients = this.recipeFormNew.value.ingridients
      this.recipeService.Recipes[this.id] = editRecipe
      this.recipeFormNew.reset()
      this.router.navigate(['']);
     }
     else{
     let newRecipe = new RecipeModule(this.recipeFormNew.value.name,
      this.recipeFormNew.value.Description,
      this.recipeFormNew.value.ImagePath,
      this.recipeFormNew.value.ingridients)
      console.log(newRecipe)
      this.recipeService.Recipes.push(newRecipe)
      this.recipeService.recipesSubject.next(this.recipeService.Recipes)
      this.recipeFormNew.reset()
      this.router.navigate(['']);
      }
    }
    getcontrols() { // a getter!
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


    onDeleteIngridents(index:number){
      (<FormArray>this.recipeFormNew.get('ingridients')).removeAt(index)
    }


}
