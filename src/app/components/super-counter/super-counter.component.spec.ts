import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterComponent } from './super-counter.component';
import SuperCounter from '../../models/super-counter';
import {count} from 'rxjs/operators';

describe('SuperCounterComponent (isolated)', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;
  let superCounter: SuperCounter;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    // The binding expects counter objects
    superCounter = { value: 0 };
    component.counter = superCounter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have a counter', () => {
    expect(component.counter).toBeDefined();
  });

  it('increment should increase counter value', () => {
    component.increment();
    component.increment();
    expect(component.counter.value).toEqual(6);
  });

  it('decrement should decrease counter value', () => {
    component.increment();
    component.increment();
    component.decrement();
    expect(component.counter.value).toEqual(3);
  });
});

describe('SuperCounterComponent (shallow)', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;
  let superCounter: SuperCounter;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    // The binding expects counter objects
    superCounter = { value: 0 };
    component.counter = superCounter;
    fixture.detectChanges();
  });

  it('should display counter value', () => {
    const counterVal = element.querySelector('.card-title');
    expect(counterVal.textContent).toEqual('0');
  });

  it('increment should increase value by 3', () => {
    const incrementButton = element.querySelector('.increment');
    const counterVal = element.querySelector('.card-title');
    incrementButton.click();
    fixture.detectChanges();  // update view!

    expect(component.counter.value).toEqual(3);
    expect(counterVal.textContent).toEqual('3');
  });

  it('decrement should decrease value by 3', () => {
    const incrementButton = element.querySelector('.increment');
    const decrementButton = element.querySelector('.decrement');
    const counterVal = element.querySelector('.card-title');
    incrementButton.click();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(3);
    decrementButton.click();
    fixture.detectChanges();  // update view!
    expect(component.counter.value).toEqual(0);
    expect(counterVal.textContent).toEqual('0');
  });

  it('decrement button should be disabled when value is 0', function() {
    expect(component.counter.value).toEqual(0);
    const decreaseEl = element.querySelector('.decrement');
    expect(decreaseEl.disabled).toBeTruthy();
  });
});
