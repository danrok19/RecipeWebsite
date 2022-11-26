
export type CategoryHttp={
  name: string,
  index_nr: number
}

export class CategoryProtoClass {
    constructor(
      private name: string,
      private index_nr: number
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
}