import { Injectable } from '@angular/core';
import { Player } from './interface';

@Injectable()
export class TicTacModel {
  size = 2;
  players: Player[] = [];
}
