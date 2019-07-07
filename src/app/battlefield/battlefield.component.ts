import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';

import { TicTacModel } from '../model';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.pug',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit, OnDestroy {
  type: number;
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
  field: string[][] = [];
  showMenu: boolean;
  isDraw: boolean;
  hasWinner: boolean;

  constructor(private model: TicTacModel) {}

  ngOnInit() {
    this.sounds.theme.play();
    this.reset();
  }

  ngOnDestroy() {
    this.sounds.theme.stop();
  }

  check(i: number, j: number) {
    this.field[i][j] = this.type ? 'O' : 'X';

    if (!this.checkDraw() && !this.checkSquare(i, j)) {
      this.type = Number(!this.type);
    }
  }

  reset() {
    this.type = 0;
    this.hasWinner = false;
    this.showMenu = false;
    this.isDraw = false;
    for (let i = 0; i < this.model.size; i++) {
      for (let j = 0; j < this.model.size; j++) {
        !this.field[i] && (this.field[i] = []);
        this.field[i][j] = '-';
      }
    }
  }

  private checkDraw(): boolean {
    for (let i = 0; i < this.model.size; i++) {
      let x = 0;
      let y = 0;
      for (let j = 0; j < this.model.size; j++) {
        this.field[i][j] === 'X' && x++;
        this.field[i][j] === 'O' && y++;
      }
      if (!x || !y) {
        return;
      }
    }
    this.draw();
    return true;
  }

  private checkSquare(i: number, j: number): boolean {
    const s = this.type ? 'O' : 'X';

    if ([
        this.field[i].reduce((acc, cur) => acc + cur, ''),
        this.field.reduce((acc, cur) => acc + cur[j], ''),
        this.field.slice(i - j).reduce((acc, cur, index) => acc + cur[index], ''),
        this.field.slice(0, j - i).reduce((acc, cur, index) => acc + cur[j - i + index], ''),
        this.field.slice(0, i + j + 1).reduce((acc, cur, index) => acc + cur[i + j - index], ''),
      ].find(val => val.includes(s.repeat(this.model.winSize)))) {
      this.win();
      return true;
    }
    return false;
  }

  private draw() {
    this.isDraw = true;
    this.sounds.laugh.play();
    setTimeout(() => this.showMenu = true, 5000);
  }

  private win() {
    this.hasWinner = true;
    this.sounds.laugh.play();
    setTimeout(() => this.showMenu = true, 5000);
  }

  private border(val: number) {
    if (val < 0) { return 0; }
    if (val > this.model.size - 1) { return this.model.size - 1; }
    return val;
  }
}
