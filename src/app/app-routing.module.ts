import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { OpenPageComponent } from './components/open-page/open-page.component';



const Routes:Routes = [{path: '' ,component:OpenPageComponent,pathMatch: 'full'},
{path: 'auth' ,component:AuthComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
