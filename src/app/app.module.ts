import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';
import { CounterDetailComponent } from './components/counter-detail/counter-detail.component';
import { SuperCounterComponent } from './components/super-counter/super-counter.component';
import { SuperDuperCounterComponent } from './components/super-duper-counter/super-duper-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent,
    SuperCounterComponent,
    SuperDuperCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
