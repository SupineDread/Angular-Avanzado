import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == undefined) return value
    return value.filter(function(value){
      return value.name.toLowerCase().includes(args.toLowerCase())
    });
  }

}
