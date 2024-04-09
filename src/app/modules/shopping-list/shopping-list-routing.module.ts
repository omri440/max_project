import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingListComponent } from 'src/app/components/shoping-list/shoping-list.component';

const routes: Routes = [{path: 'shopinglist' ,component:ShopingListComponent},]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ShoppingListRoutingModule {}