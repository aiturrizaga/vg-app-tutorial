import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

/**
 * Set focus to input element
 */
@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  @Input() appAutoFocus: boolean;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    if (this.appAutoFocus) {
      setTimeout(() => this.el.nativeElement.focus());
    }
  }

}

/**
 * Select all content of input
 */
@Directive({
  selector: '[appSelectAll]'
})
export class SelectAllDirective implements AfterContentInit {

  @Input() appSelectAll: boolean;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    if (this.appSelectAll) {
      setTimeout(() => this.el.nativeElement.select());
    }
  }

}

export const INPUT_UTIL_DIRECTIVES = [
  AutoFocusDirective,
  SelectAllDirective
];
