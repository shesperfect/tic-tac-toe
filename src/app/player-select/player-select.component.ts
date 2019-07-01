import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TicTacModel } from '../model.';
import { players } from '../const';
import { Player } from '../interface';

@Component({
  selector: 'app-player-choose',
  templateUrl: './player-select.component.pug',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent {
  playersList: Player[] = players;
  playerNum = 1;

  constructor(private model: TicTacModel, private router: Router) {}

  choose(player: Player) {
    this.model.players.push({...player, field: Array(this.model.size).fill([])});
    ++this.playerNum > 2 && this.router.navigateByUrl('/battle');
  }
}
