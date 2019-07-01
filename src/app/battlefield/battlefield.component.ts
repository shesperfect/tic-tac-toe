import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';

import { TicTacModel } from '../model.';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.pug',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit, OnDestroy {
  type = 0;
  sound = new Howl({
    src: ['assets/audio/battle1.mp3', 'assets/audio/battle2.mp3', 'assets/audio/battle3.mp3'],
  });

  constructor(private model: TicTacModel) {}

  ngOnInit() {
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.stop();
  }

  check(i: number, j: number) {
    const { players, size } = this.model;
    const field = players[this.type].field;

    field[i][j] = 1;
    if (field[i].reduce((acc, cur) => acc + cur, 0) === size ||
        field.reduce((acc, cur) => acc + cur[j], 0) === size ||
        field.reduce((acc, cur, index) => acc + cur[index], 0) === size ||
        field.reduce((acc, cur, index) => acc + cur[size - index - 1], 0) === size) {
      this.win();
      return;
    }

    this.type = Number(!this.type);
  }

  win() {
    console.log(this.type);
    alert(`Player ${!this.type ? 1 : 2} win!`);
  }

  tie() {}
}
