import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicTacModel } from '../model.';
import { players } from '../const';
import { Player } from '../interface';
import { Howl } from 'howler';

@Component({
  selector: 'app-player-choose',
  templateUrl: './player-select.component.pug',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit, OnDestroy {
  playersList: Player[] = players;
  playerNum = 1;
  sound = new Howl({
    src: ['assets/audio/playerListMusic.mp3'],
  });

  constructor(private model: TicTacModel, private router: Router) {}

  ngOnInit() {
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.stop();
  }

  choose(player: Player) {
    this.model.players.push({...player, field: Array(this.model.size).fill(0).map(() => [])});
    ++this.playerNum > 2 && this.router.navigateByUrl('/battle');
  }
}
