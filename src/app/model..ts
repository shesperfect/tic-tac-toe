import { Injectable } from '@angular/core';
import { Player } from './interface';

@Injectable()
export class TicTacModel {
  size: number;
  players: Player[] = [];
}
