import { Injectable } from '@angular/core';
import { Player } from './interface';

@Injectable()
export class TicTacModel {
  size = 3;
  players: Player[] = [];
}
