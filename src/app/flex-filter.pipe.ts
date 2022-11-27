import { Pipe, PipeTransform } from '@angular/core';
import { MealProto, MealProtoClass } from './types/meal-proto';

@Pipe({
  name: 'flexFilter'
})
export class FlexFilterPipe implements PipeTransform {

  transform(list: MealProtoClass[], ...args: string[]): any {
    const filterValue = args[0];
    if (!filterValue) {
      return list;
    }
    const filteredList = list.filter(el => {
      return el.Name.toLowerCase().includes(filterValue.toLowerCase())
    });
    return filteredList;
  }

}
