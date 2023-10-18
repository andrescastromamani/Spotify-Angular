import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input('default') defaultImg: string = '';
  @HostListener('error') handleError(): void {
    const nativeElement = this.host.nativeElement;
    nativeElement.src = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }

  constructor(private host: ElementRef) { }
}
