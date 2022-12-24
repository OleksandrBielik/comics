import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    const newValue: string = value[0].toUpperCase() + value.slice(1);
    return newValue;
  }
}
