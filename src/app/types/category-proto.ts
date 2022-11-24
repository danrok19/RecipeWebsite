import { MealProto } from "./meal-proto";

export type CategoryHttp={
  name: string,
  index_nr: number,
  mealsList: Array<String>
}

export class CategoryProtoClass {
    constructor(
      private name: string,
      private index_nr: number,
      private mealsList: Array<String>,
    ) {}
  
    //--NAME----------------------------------
    get Name(): string {
      return this.name;
    }
  
    set Name(name: string) {
      this.name = name;
    }
  
    //--INDEX----------------------------------
    get Index_nr(): number {
      return this.index_nr;
    }
  
    set Index_nr(index_nr: number) {
      this.index_nr = index_nr;
    }
    //--MEALLIST----------------------------------

    add(meal: String):void{
        this.mealsList.push(meal);
    }

    get MealsList(): Array<String>{
        return this.mealsList;
    }

    set MealsList(mealsList:Array<String>){
      this.mealsList = mealsList;
    }
}