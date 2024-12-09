import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { OpenPageComponent } from './components/open-page/open-page.component';



const Routes:Routes = [{path: '' ,component:OpenPageComponent,pathMatch: 'full'},
{
  path: 'recipes',
  loadChildren: () => import('./modules/recipes/recipes-routing.module').then(m => m.RecipeRoutingModule)
},
{
  path: 'shopinglist',
  loadChildren: () => import('./modules/shopping-list/shopping-list-routing.module').then(m => m.ShoppingListRoutingModule)
},
{path: 'auth' ,component:AuthComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(Routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
