import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { AuthComponent } from './components/auth/auth.component';



const Routes:Routes = [{path: '' ,redirectTo: '/auth',pathMatch: 'full'},
{path: 'auth' ,component:AuthComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
