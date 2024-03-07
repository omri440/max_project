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
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule,  } from '@angular/router';



const Routes:Routes = [{path: '' ,component:RecipesComponent},
{path: 'shopinglist' ,component:ShopingListComponent}]

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
    RouterModule.forRoot(Routes)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
