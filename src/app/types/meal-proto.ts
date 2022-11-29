
// export type MealProto={
//     name: string
//     realizationTime: number
//     rating: number
// }

export type MealHttp={
    name: string,
    timePrep: number,
    index_nr: number,
    rating: number,
    ingredientsList: Array<String>,
    description: string,
    categoryId: number,
    tagsList: Array<String>
}

export class MealProtoClass {
    constructor(
      private name: string,
      private timePrep: number,
      private index_nr: number,
      private rating: number,
      private ingredientsList: Array<String>,
      private description: string,
      private categoryId: number,
      private tagsList: Array<String>
    ) {}
  
    get Name(): string {
      return this.name;
    }
  
    set Name(name: string) {
      this.name = name;
    }
  
    get TimePrep(): number {
      return this.timePrep;
    }
  
    set TimePrep(timePrep: number) {
      this.timePrep = timePrep;
    }
  
    get Index_nr(): number {
      return this.index_nr;
    }
  
    set Index_nr(index_nr: number) {
      this.index_nr = index_nr;
    }

    set Description(description: string){
        this.description = description;
    }

    get Description(): string{
        return this.description;
    }

    add(ingredient: string):void{
        this.ingredientsList.push(ingredient);
    }

    get Ingredients(): Array<String>{
        return this.ingredientsList;
    }

    set Ingredients(ingredients: Array<String>){
      this.ingredientsList = ingredients;
    }

    get Rating(): number {
      return this.rating;
    }
  
    set Rating(rating: number) {
      this.rating = rating;
    }

    get CategoryId(): number {
      return this.categoryId;
    }
  
    set CategoryId(categoryId: number) {
      this.categoryId = categoryId;
    }
    get TagsList(): Array<String>{
      return this.tagsList;
  }

  set TagsList(tagsList: Array<String>){
    this.tagsList = tagsList;
  }
    
}