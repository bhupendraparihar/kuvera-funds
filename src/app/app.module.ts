import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import {MdButtonModule, MdCheckboxModule, MdDatepickerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NewPurchaseComponent,
    PurchaseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
