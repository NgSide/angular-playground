import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'getRandomElement'
})
export class GetRandomElementPipe implements PipeTransform {
  transform(array: string[]): string {
    const index = this._getRandomInt(0, array.length - 1);
    return array[index];
  }

  private _getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}