import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from 'src/app/components/add-recipe/add-recipe.component';
import { AuthGuardService } from 'src/app/components/auth/auth-guard.service';
import { RecipesDetailComponent } from 'src/app/components/recipes-detail/recipes-detail.component';
import { RecipesComponent } from 'src/app/components/recipes/recipes.component';
import { SatrtingrecipeComponent } from 'src/app/components/satrtingrecipe/satrtingrecipe.component';

const routes: Routes = [{path: 'recipes' ,component:RecipesComponent,canActivate:[AuthGuardService],
children:[{path:'',component:SatrtingrecipeComponent},
{path:'new',component:AddRecipeComponent},
{path:':id',component:RecipesDetailComponent},
{path:':id/edit',component:AddRecipeComponent},
]},]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class RecipeRoutingModule {}