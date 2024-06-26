import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModule } from 'src/app/models/recipe/recipe.module';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModule ;
  @Input() index: number ;
  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  }

