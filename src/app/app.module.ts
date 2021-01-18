import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableEditCellComponent } from './components/table-editable-cells/table-edit-cell.component';

import { INPUT_UTIL_DIRECTIVES, OnlyNumberDirective } from './directives';

const APP_DIRECTIVES = [
  OnlyNumberDirective,
  INPUT_UTIL_DIRECTIVES
];

@NgModule({
  declarations: [
    AppComponent,
    TableEditCellComponent,
    APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
