import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if search term is undefined
    if(term === undefined || term === '')  return ninjas;
    // return updated ninjas array
    // return ninjas.filter(function(ninja){
    //   return ninja.name.toLowerCase().includes(term.toLowerCase());
    // })

    return ninjas.filter(ninja => ninja.name.toLowerCase().includes(term.toLowerCase()));
  }

}
