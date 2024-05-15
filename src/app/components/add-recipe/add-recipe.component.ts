import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm, Form, FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';
import { ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  private initializeForm(): void {
    this.initializeFormControls();
    this.initializeRecipeIngredients();
  }
  
  private initializeFormControls(): void {
    this.recipename = '';
    this.recipeDescriptionStart = '';
    this.recipeImagePath = '';
  
    if (this.editmode) {
      const recipe: RecipeModule = this.recipeService.getRecipesById(this.id);
      this.recipename = recipe.name;
      this.recipeImagePath = recipe.imagePath;
      this.recipeDescriptionStart = recipe.description;
    }
  
    this.recipeFormNew = new FormGroup({
      'name': new FormControl(this.recipename, Validators.required),
      'Description': new FormControl(this.recipeDescriptionStart, Validators.required),
      'ImagePath': new FormControl(this.recipeImagePath, Validators.required),
      'ingridients': new FormArray([]),
    });
  }
  
  private initializeRecipeIngredients(): void {
    if (this.editmode) {
      const recipe: RecipeModule = this.recipeService.getRecipesById(this.id);
      const recipeIngridList = this.recipeFormNew.get('ingridients') as FormArray;
      if (recipe['ingridients']) {
        recipe['ingridients'].forEach(ingredient => {
          recipeIngridList.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required)
            })
          );
        });
      }
    }
  }
  
  private onInitForm(): void {
    this.initializeForm();
  }
  
  private editRecipe(): void {
    const editRecipe = this.recipeService.getRecipesById(this.id);
    editRecipe.name = this.recipeFormNew.value.name;
    editRecipe.description = this.recipeFormNew.value.Description;
    editRecipe.imagePath = this.recipeFormNew.value.ImagePath;
    editRecipe.ingridients = this.recipeFormNew.value.ingridients;
    this.recipeService.Recipes[this.id] = editRecipe;
  }
  
  private addNewRecipe(): void {
    const newRecipe = new RecipeModule(
      this.recipeFormNew.value.name,
      this.recipeFormNew.value.Description,
      this.recipeFormNew.value.ImagePath,
      this.recipeFormNew.value.ingridients
    );
    this.recipeService.Recipes.push(newRecipe);
    this.recipeService.recipesSubject.next(this.recipeService.Recipes);
  }
  
  onSubmit(): void {
    if (this.editmode) {
      this.editRecipe();
    } else {
      this.addNewRecipe();
    }
  
    this.recipeFormNew.reset();
    this.router.navigate(['recipes']);
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
