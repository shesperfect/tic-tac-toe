import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { TicTacModel } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private model: TicTacModel) {}

  sound = new Howl({
    src: ['assets/audio/startscreen.mp3'],
    loop: true,
  });

  ngOnInit() {
    this.model.reset();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.stop();
  }
}
