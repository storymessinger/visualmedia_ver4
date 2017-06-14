import { Directive, Input, Output, Attribute } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[srcset]':'srcset',
    '[src]':'src'
  }
})
export class DefaultImageDirective {

  constructor(){}

  @Input() src:string;
  @Input() srcset:string;
  @Input() default:string;

  updateUrl() {
    this.srcset = this.default;
    this.src= this.default;
  }

}
