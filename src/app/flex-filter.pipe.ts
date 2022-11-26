import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flexFilter'
})
export class FlexFilterPipe implements PipeTransform {

  transform(list: any[], ...args: any[]): any {
    const searchBy = args[0];
    if (!searchBy) { return list; }
    const filteredList = list.filter(el => {
      console.log('filter', searchBy, list, el);
      if (el.toLowerCase().includes(searchBy)) { return el; }
    });
    return filteredList;
  }

}
