import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[cell]',
  templateUrl: './cell.component.pug',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  type: 0 | 1;

  @Input() cell: 0 | 1;
  @Output() fill = new EventEmitter();

  change() {
    console.log('type', this.cell);
    this.type = this.cell;
    this.fill.emit();
  }
}
