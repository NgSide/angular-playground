import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount',
})
export class WordcountPipe implements PipeTransform {
  transform(value: any): number {
    return value.trim().split(/\s+/).length;
  }
}
