import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync
} from '@angular/core/testing';

import { SuperDuperCounterComponent } from './super-duper-counter.component';
import { SuperDuperCounter } from '../../models/super-duper-counter';

describe('SuperDuperCounterComponent', () => {
  let component: SuperDuperCounterComponent;
  let fixture: ComponentFixture<SuperDuperCounterComponent>;

  // beforeEach(waitForAsync( () => {
  //   TestBed.configureTestingModule({
  //     declarations: [ SuperDuperCounterComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SuperDuperCounterComponent);
    component = fixture.componentInstance;
    component.counter = new SuperDuperCounter();
    fixture.detectChanges();
  }));

  it('should start counter', fakeAsync(() => {
    component.start();
    tick(1000);
    discardPeriodicTasks();
    expect(component.counter.value).toEqual(1);
  }));
});
