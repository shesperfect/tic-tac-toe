import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numArray'
})
export class NumArrayPipe implements PipeTransform {
  transform(size: number): number[] {
    return Array(size).fill(1).map((x, i) => i);
  }
}
