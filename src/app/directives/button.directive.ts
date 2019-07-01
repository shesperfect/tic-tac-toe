import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Howl } from 'howler';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const enterSound = new Howl({
      src: ['assets/audio/menuitem.mp3'],
    });
    const clickSound = new Howl({
      src: ['assets/audio/menuitem_active.mp3'],
    });
    this.renderer.listen(el.nativeElement, 'mouseenter', () => enterSound.play());
    this.renderer.listen(el.nativeElement, 'click', () => clickSound.play());
  }
}
