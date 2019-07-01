import { Component } from '@angular/core';

import { TicTacModel } from '../model.';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.pug',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent {
  type = 0;

  constructor(private model: TicTacModel) {}

  check(i: number, j: number) {
    const { players, size } = this.model;
    const field = players[this.type].field;

    console.log('i', i, 'j', j);
    console.log(field);
    console.log(field[i][j]);
    field[i][j] = 1;
    console.log(field);
    // if (field[i].reduce((acc, cur) => acc + cur, 0) === size ||
    //     field.reduce((acc, cur) => acc + cur[j], 0) === size ||
    //     field.reduce((acc, cur, index) => acc + cur[index], 0) === size ||
    //     field.reduce((acc, cur, index) => acc + cur[size - index - 1], 0) === size) {
    //   alert(`Player ${this.type ? 1 : 2} win!`);
    // }

    this.type = Number(!this.type);
  }
}
