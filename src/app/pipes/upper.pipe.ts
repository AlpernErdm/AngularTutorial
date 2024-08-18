import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //Kendi yarattıgım custom pipe
    var name=value as string;
    return name.toUpperCase();
  }

}
