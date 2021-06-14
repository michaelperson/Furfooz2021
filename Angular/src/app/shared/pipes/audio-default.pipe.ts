import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audioDefault'
})
export class AudioDefaultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value)
      return 'assets/img/audio.jpg';
    return 'assets/img/audioOk.jpg';
  }

}

