import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SatrtingrecipeComponent } from './components/satrtingrecipe/satrtingrecipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipesDetailComponent } from './components/recipes-detail/recipes-detail.component';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { AuthComponent } from './components/auth/auth.component';



const Routes:Routes = [{path: '' ,redirectTo: '/auth',pathMatch: 'full'},
  {path: 'recipes' ,component:RecipesComponent,canActivate:[AuthGuardService],
  children:[{path:'',component:SatrtingrecipeComponent},
  {path:'new',component:AddRecipeComponent},
  {path:':id',component:RecipesDetailComponent},
  {path:':id/edit',component:AddRecipeComponent},
]},
{path: 'shopinglist' ,component:ShopingListComponent},
{path: 'auth' ,component:AuthComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
