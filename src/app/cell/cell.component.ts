import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.pug',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  type: 0 | 1;

  @Input() currentType: 0 | 1;
  @Output() fill = new EventEmitter();

  change() {
    this.type = this.currentType;
    this.fill.emit();
  }
}
