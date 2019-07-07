import { Injectable } from '@angular/core';
import { Player } from './interface';

@Injectable()
export class TicTacModel {
  size = 3;
  winSize = 3;
  players: Player[] = [];

  reset() {
    this.size = 3;
    this.winSize = 3;
    this.players = [];
  }
}
