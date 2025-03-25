import { Pipe, PipeTransform } from '@angular/core';
import { Universite } from '../models/universite.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Universite[], searchText: string): Universite[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item =>
      item.nomUniv.toLowerCase().includes(searchText.toLowerCase()) ||
      item.idUniv.toString().includes(searchText)
    );
  }
}
