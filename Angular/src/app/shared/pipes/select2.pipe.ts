import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select2'
})
export class Select2Pipe implements PipeTransform {
  transform(value: [], ...args: string[]): unknown {
    if(!value) return;
    return value.map(item => { return {id: item[args[0]], text: item[args[1]]} })
  }
}