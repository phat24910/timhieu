import {Directive,Input, ElementRef, HostListener, inject} from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight') highlightColor?: string;

  private el: ElementRef = inject(ElementRef);
  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}




