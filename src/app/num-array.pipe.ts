import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numArray'
})
export class NumArrayPipe implements PipeTransform {
  transform(size: number): number[] {
    return Array(size).fill(0).map((x, i) => i);
  }
}
