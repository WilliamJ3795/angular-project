import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(sourceList: {name:string, description:string, imagePath: string, 
    id: number }[], 
    searchText:string){} 
  }
