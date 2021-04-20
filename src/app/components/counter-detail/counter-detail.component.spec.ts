import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';
import Counter from '../../models/counter';

describe('CounterDetailComponent (isolated)', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    component.counter = new Counter();
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should have a counter', () => {
    expect(component.counter).toBeDefined();
  });

  it('increment should increase counter value', () => {
    component.increment();
    component.increment();
    expect(component.counter.value).toEqual(2);
  });

  it('decrement should decrease counter value', () => {
    component.increment();
    component.increment();
    component.decrement();
    expect(component.counter.value).toEqual(1);
  });

  it('should not decrease counter value below 0', () =>  {
    expect(component.counter.value).toEqual(0);
    component.decrement();
    expect(component.counter.value).toEqual(0);
  });
});

describe('CounterDetailComponent (shallow)', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;
  let counterEl;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    counterEl = fixture.nativeElement;
    component.counter = new Counter();
    fixture.detectChanges();
  }));

  it('element should display counter value', () => {
    const el = counterEl.querySelector('.card-title');
    expect(el.textContent).toEqual('0');
  });

  it('increment button should increase counter value', () => {
    const el = counterEl.querySelector('.card-title');
    const buttonEl = counterEl.querySelector('.increment');
    buttonEl.click();
    fixture.detectChanges(); // update the view!
    expect(component.counter.value).toEqual(1);
    expect(el.textContent).toEqual('1');
  });

  it('decrement button should decrease counter value', () => {
    const el = counterEl.querySelector('.card-title');
    const decreaseEl = counterEl.querySelector('.decrement');
    component.counter.value = 1;
    fixture.detectChanges();
    decreaseEl.click();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(0);
    expect(el.textContent).toEqual('0');
  });

  it('decrement button should be disabled when value is 0', () => {
    expect(component.counter.value).toEqual(0);
    const decreaseEl = counterEl.querySelector('.decrement');
    expect(decreaseEl.disabled).toBeTruthy();
  });
});
