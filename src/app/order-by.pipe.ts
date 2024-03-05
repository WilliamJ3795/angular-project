import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], field: string): any[] { 
    if (value != null && value.length > 1) { 
    let adjustment : number = 1; 
    if (field.startsWith('-')) { 
    field = field.substring(1); 
    adjustment = -1; 
    } 
    value.sort((a: any, b: any) => adjustment * (a[field] < b[field] ? -1 : (a[field] > b[field] ? 1 : 0))); 
    } 
    return value; 
    }
}
