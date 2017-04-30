import { Directive, ElementRef, Input, HostListener, Renderer, AfterViewInit } from '@angular/core';
@Directive({ selector: '[sidebar-btn]' })
export class SidebarBtnDirective implements AfterViewInit {
  constructor(public el: ElementRef, public renderer:Renderer) {
    //  el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
  }

  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
  }
    
}