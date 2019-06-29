import { Component } from '@angular/core';

import { Player } from '../interface';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.pug',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent {
  size = 3;
  type = 1;
  players: Player[] = [
    { field: [[], [], []] },
    { field: [[], [], []] },
  ];

  updateSize(size: number) {
    this.size = size;
  }

  // playersChoosed(num: number) {
  //   for (let i = 0; i < num; i++) {
  //     this.players.push({ field: [[]] });
  //   }
  // }

  check(i: number, j: number) {
    this.players[this.type].field[i][j] = 1;
    if (this.players[this.type].field[i].reduce((acc, cur) => acc + cur, 0) === this.size ||
        this.players[this.type].field.reduce((acc, cur) => acc + cur[j], 0) === this.size ||
        this.players[this.type].field.reduce((acc, cur, index) => acc + cur[index], 0) === this.size ||
        this.players[this.type].field.reduce((acc, cur, index) => acc + cur[this.size - index - 1], 0) === this.size) {
      alert(`Player ${this.type ? 1 : 2} win!`);
    }

    this.type = Number(!this.type);
  }
}
