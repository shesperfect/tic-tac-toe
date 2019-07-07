import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicTacModel } from '../model';
import { players } from '../const';
import { Player } from '../interface';
import { Howl } from 'howler';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.pug',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit, OnDestroy {
  playersList: Player[] = players;
  hoverName: string;
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
    this.model.players.push(player) === 2 && this.router.navigateByUrl('/battle');
  }
}
