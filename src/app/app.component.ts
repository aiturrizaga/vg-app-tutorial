import { Component } from '@angular/core';
import { CheckboxStatus } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vg-app-tutorial';
  stateModel = CheckboxStatus.ITEM_UNCHECKED;

  get checkboxStatusLabel() {
    switch (this.stateModel) {
      case CheckboxStatus.ITEM_CHECKED:
        return 'Seleccionado';
      case CheckboxStatus.ITEM_UNCHECKED:
        return 'No seleccionado';
      case CheckboxStatus.ITEM_INDETERMINATE:
        return 'Indeterminado';
    }
  }
}
