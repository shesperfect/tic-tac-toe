import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';

import { TicTacModel } from '../model';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.pug',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit, OnDestroy {
  type = 0;
  sounds = {
    theme: new Howl({
      src: ['assets/audio/battle1.mp3', 'assets/audio/battle2.mp3', 'assets/audio/battle3.mp3'],
      volume: 0.2,
    }),
    kicks: [
      new Howl({src: ['assets/audio/kick1.mp3']}),
      new Howl({src: ['assets/audio/kick1.mp3']}),
    ],
    laugh: new Howl({src:  ['assets/audio/laugh.mp3']}),
  };
  isFinished = false;
  showMenu = false;

  constructor(private model: TicTacModel) {}

  ngOnInit() {
    this.sounds.theme.play();
  }

  ngOnDestroy() {
    this.sounds.theme.stop();
  }

  check(i: number, j: number) {
    this.sounds.kicks[this.type].play();

    const field = this.model.players[this.type].field;

    field[i][j] = 1;

    // check for winner
    const h = field[i].reduce((acc, cur) => acc + cur, 0);
    const v = field.reduce((acc, cur) => acc + cur[j], 0);
    const dl = field.reduce((acc, cur, index) => acc + cur[index], 0);
    const dr = field.reduce((acc, cur, index) => acc + cur[this.model.size - index - 1], 0);
    if ([h, v, dl, dr].find(val => val === this.model.size)) {
      this.finish();
    } else {
      this.type = Number(!this.type);
    }
  }

  finish() {
    this.isFinished = true;
    this.sounds.laugh.play();
    setTimeout(() => this.showMenu = true, 5000);
  }

  revenge() {
    this.type = 0;
    this.isFinished = false;
    this.showMenu = false;
    this.model.revenge();
  }
}
