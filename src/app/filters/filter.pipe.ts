import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchText: string): any[] {
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }

    searchText = searchText.toLocaleLowerCase();

    return list.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
