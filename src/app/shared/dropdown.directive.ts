import {
    Directive,
    HostListener,
    ElementRef,
    Renderer2,
    HostBinding
 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isClicked = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isClicked = !this.isClicked;
        // if (this.isClicked) {
        //     this.renderer.addClass(this.elRef.nativeElement, 'open');
        // } else {
        //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
        // }
      }
}
