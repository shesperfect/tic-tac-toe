import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.pug',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Output() sizeChanged = new EventEmitter<number>();
  @Output() playersNum = new EventEmitter<number>();

  play(size: number, playersNum: number) {
    this.sizeChanged.emit(+size);
    this.playersNum.emit(+playersNum);
  }
}
