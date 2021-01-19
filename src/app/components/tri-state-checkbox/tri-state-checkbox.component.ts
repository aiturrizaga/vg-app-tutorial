import { Component, Input, OnInit } from '@angular/core';

export class CheckboxStatus {
  public static ITEM_UNCHECKED = false;
  public static ITEM_CHECKED = true;
  public static ITEM_INDETERMINATE = null;
}

@Component({
  selector: 'app-tri-state-checkbox',
  templateUrl: './tri-state-checkbox.component.html',
  styles: []
})
export class TriStateCheckboxComponent implements OnInit {

  @Input() label = '';

  private _activeIndeterminate = true;
  indeterminate = CheckboxStatus.ITEM_INDETERMINATE;

  checkboxStatus = CheckboxStatus.ITEM_UNCHECKED;

  constructor() {
  }

  ngOnInit(): void {
    if (this.checkboxStatus === CheckboxStatus.ITEM_UNCHECKED) {
      this.activeIndeterminate = true;
    } else if (this.checkboxStatus === CheckboxStatus.ITEM_CHECKED) {
      this.activeIndeterminate = false;
    }
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
  }

  get activeIndeterminate(): boolean {
    return this._activeIndeterminate;
  }

  set activeIndeterminate(value: boolean) {
    this._activeIndeterminate = value;
  }
}
