import { Injectable } from '@angular/core';
import { Player } from './interface';

@Injectable()
export class TicTacModel {
  size = 3;
  players: Player[] = [];

  reset() {
    this.size = 3;
    this.players = [];
  }

  revenge() {
    this.players.forEach(player =>
      player.field = Array(this.size).fill(0).map(() => []),
    );
  }
}
