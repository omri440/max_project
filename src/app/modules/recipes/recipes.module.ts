import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from 'src/app/components/recipes/recipes.component';
import { RecipesListComponent } from 'src/app/components/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from 'src/app/components/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from 'src/app/components/recipe-item/recipe-item.component';
import { SatrtingrecipeComponent } from 'src/app/components/satrtingrecipe/satrtingrecipe.component';
import { AddRecipeComponent } from 'src/app/components/add-recipe/add-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    SatrtingrecipeComponent,
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    RouterModule,
    RecipeRoutingModule
  ],
})
export class RecipesModule {}
