import { Directive, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl, 'pl');


@Directive({
  selector: '[appDirFormater]'
})

export class DirFormaterDirective {
  @Input() appDirFormater: string;
  @Input() defaultColor = 'red';

  constructor(private element: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appDirFormater || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highlight('');
  }

  private highlight(color: string) { 
    this.element.nativeElement.style.backgroundColor = color;
  }

}
