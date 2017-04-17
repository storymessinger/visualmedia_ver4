import { Directive, Input, Output, Attribute } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[srcset]':'srcset'
  }
})
export class DefaultImageHomeDirective {

  constructor(){}

  @Input() srcset:string;
  @Input() default:string;

  updateUrl() {
    this.srcset = this.default;
  }

}
