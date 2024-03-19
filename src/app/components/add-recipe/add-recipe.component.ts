import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm, Form, FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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


  constructor(private route:ActivatedRoute, private recipeService:RecipesService) { }
  
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
    if (this.editmode){
      let recipe:RecipeModule = this.recipeService.getRecipesById(this.id)
      this.recipename = recipe.name
      this.recipeImagePath = recipe.imagePath
      this.recipeDescriptionStart = recipe.description

    }
    this.recipeFormNew = new FormGroup({
      'name': new FormControl(this.recipename),
      'Description': new FormControl(this.recipeDescriptionStart),
      'ImagePath': new FormControl(this.recipeImagePath)
    })
  }
  
  
}
