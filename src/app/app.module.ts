import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { ShopingEditComponent } from './components/shoping-edit/shoping-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { SatrtingrecipeComponent } from './components/satrtingrecipe/satrtingrecipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlertComponent } from './components/alert/alert.component';
import { DynamicChildLoaderDirective } from './directives/dynamic-child-loader.directive';
import { AppRoutingModule } from './app-routing.module';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    SatrtingrecipeComponent,
    AddRecipeComponent,
    AuthComponent,
    AlertComponent,
    DynamicChildLoaderDirective,
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
