import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-background-slider',
  templateUrl: './background-slider.component.pug',
  styleUrls: ['./background-slider.component.scss']
})
export class BackgroundSliderComponent {
  current$ = interval(5000).pipe(
    map(val => val % 7 + 1),
    startWith(1),
  );
}
