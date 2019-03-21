import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponent } from './counter-detail/counter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
