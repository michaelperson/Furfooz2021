import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgDefault'
})
export class ImgDefaultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value)
      return 'assets/img/default.png';
    return value;
  }

}
