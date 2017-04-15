import { Directive, Input, Output, Attribute } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[srcset]':'srcset'
  }
})
export class DefaultImageDirective {

  constructor(){}

  @Input() srcset:string;
  @Input() default:string;

  updateUrl() {
    this.srcset = this.default;
  }

}
