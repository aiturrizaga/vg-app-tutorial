import { Component, OnInit } from '@angular/core';

export declare type StateCheckboxType = 'checked' | 'indeterminate' | 'unchecked';

interface CheckboxItem {
  status: StateCheckboxType;
}

@Component({
  selector: 'app-tri-state-checkbox',
  templateUrl: './tri-state-checkbox.component.html',
  styles: []
})
export class TriStateCheckboxComponent implements OnInit {

  private _checked: StateCheckboxType = 'checked';
  private _unchecked: StateCheckboxType = 'unchecked';
  private _indeterminate: StateCheckboxType = 'indeterminate';

  checkbox: CheckboxItem = {status: this.checked};

  constructor() {
  }

  ngOnInit(): void {
  }

  checkStatus(checkbox) {
    let result: boolean;
    switch (checkbox.status) {
      case this.checked: {
        checkbox.status = this.unchecked;
        result = false;
        break;
      }
      case this.unchecked: {
        checkbox.status = this.indeterminate;
        result = null;
        break;
      }
      case this.indeterminate: {
        checkbox.status = this.checked;
        result = true;
        break;
      }
    }

    console.log('Status: ', result);
  }

  get checked(): StateCheckboxType {
    return this._checked;
  }

  get unchecked(): StateCheckboxType {
    return this._unchecked;
  }

  get indeterminate(): StateCheckboxType {
    return this._indeterminate;
  }
}
