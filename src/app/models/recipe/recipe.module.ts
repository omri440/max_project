import { ingridient } from "src/app/shared/ingridient.model";

export class RecipeModule {
  public name : string ;
  public description: string ;
  public imagePath: string ;
  public ingridients: ingridient[]

  constructor  (names:string ,desc:string ,imagePAth:string ,ingridients:ingridient[]) {
    this.name = names
    this.description = desc
    this.imagePath = imagePAth
    this.ingridients = ingridients
  }
 }
