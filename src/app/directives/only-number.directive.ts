import { Directive, ElementRef, HostListener, Input } from '@angular/core';

export declare type NumericType = 'number' | 'decimal';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('numericType') numericType: NumericType; // number | decimal
  // tslint:disable-next-line:no-input-rename
  @Input('maxValue') maxValue: number; // maximo valor

  private regex = {
    number: new RegExp(/^\d+$/),
    decimal: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g)
  };

  private specialKeys = {
    number: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Alt', 'Enter'],
    decimal: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Alt', 'Enter'],
  };

  constructor(private el: ElementRef) {
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData.getData('text');
    if (isNaN(Number(pastedText))) {
      event.preventDefault();
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {

    if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
      return;
    }
    // Do not use event.keycode this is deprecated.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    const target: any = event.target;

    if (next && !String(next).match(this.regex[this.numericType])) {
      event.preventDefault();
    }
    if (target.selectionStart !== 0) {
      this.validateMaxValue(event, next);
    }
  }

  validateMaxValue(event, next) {
    if (Number(next) > this.maxValue) {
      event.preventDefault();
    } else if (next === '00') {
      event.preventDefault();
    }
  }

}
