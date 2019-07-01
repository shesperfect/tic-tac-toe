import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sound = new Howl({
    src: ['assets/audio/startscreen.mp3'],
  });

  ngOnInit() {
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.stop();
  }
}
