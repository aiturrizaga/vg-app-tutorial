import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export class CheckboxStatus {
  public static ITEM_UNCHECKED = false;
  public static ITEM_CHECKED = true;
  public static ITEM_INDETERMINATE = null;
}

@Component({
  selector: 'app-tri-state-checkbox',
  templateUrl: './tri-state-checkbox.component.html',
  styles: [
    `
      .flex {
        display: flex;
      }

      .justify-start {
        justify-content: flex-start;
      }

      .items-center {
        align-items: center;
      }

      .gap-x-2 {
        column-gap: 0.5rem;
      }

      .disabled-text {
        color: #cccccc;
      }
    `
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TriStateCheckboxComponent),
    multi: true
  }]
})
export class TriStateCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() label = '';

  private _activeIndeterminate = true;
  indeterminate = CheckboxStatus.ITEM_INDETERMINATE;
  checkboxStatus = CheckboxStatus.ITEM_UNCHECKED;

  @HostBinding('class.disabled-text')
  isDisabled = false;

  onChange: (value: CheckboxStatus) => void = () => {};
  // tslint:disable-next-line:ban-types
  onTouched: Function = () => {};

  constructor() {
  }

  ngOnInit(): void {
    this.setIndeterminateValue();
  }

  // @Override: ControlValueAccessor
  writeValue(obj: any): void {
    this.checkboxStatus = obj;
    this.setIndeterminateValue();
  }

  // @Override: ControlValueAccessor
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // @Override: ControlValueAccessor
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // @Override: ControlValueAccessor
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeStatus() {
    if (this.activeIndeterminate) {
      this.checkboxStatus = null;
    }
    switch (this.checkboxStatus) {
      case CheckboxStatus.ITEM_CHECKED:
        this.checkboxStatus = CheckboxStatus.ITEM_CHECKED;
        break;
      case CheckboxStatus.ITEM_UNCHECKED:
        this.activeIndeterminate = true;
        break;
      case CheckboxStatus.ITEM_INDETERMINATE:
        this.activeIndeterminate = false;
        break;
    }

    this.onChange(this.checkboxStatus);
    this.onTouched();
  }

  setIndeterminateValue() {
    if (this.checkboxStatus === CheckboxStatus.ITEM_UNCHECKED) {
      this.activeIndeterminate = true;
    } else if (this.checkboxStatus === CheckboxStatus.ITEM_CHECKED) {
      this.activeIndeterminate = false;
    }
  }

  get activeIndeterminate(): boolean {
    return this._activeIndeterminate;
  }

  set activeIndeterminate(value: boolean) {
    this._activeIndeterminate = value;
  }

}
