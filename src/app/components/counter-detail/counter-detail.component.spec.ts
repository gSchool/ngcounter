import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';
import Counter from '../../models/counter';

describe('CounterDetailComponent (isolated)', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;
  let counter: Counter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    // The bindings accept objects
    counter = { value: 0 };
    component.counter = counter;
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
  let counter: Counter;
  let counterEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    counterEl = fixture.debugElement.nativeElement;
    // The binding expects counter objects
    counter = { value: 0 };
    component.counter = counter;
    fixture.detectChanges();
  });

  it('element should display counter value', () => {
    const el = counterEl.querySelector('#counterValue');
    expect(el.textContent).toEqual('0');
  });

  it('increment button should increase counter value', () => {
    const el = counterEl.querySelector('#counterValue');
    const buttonEl = counterEl.querySelector('#increment');
    buttonEl.click();
    fixture.detectChanges(); // update the view!
    expect(component.counter.value).toEqual(1);
    expect(el.textContent).toEqual('1');
  });

  it('decrement button should decrease counter value', () => {
    const el = counterEl.querySelector('#counterValue');
    const increaseEl = counterEl.querySelector('#increment');
    const decreaseEl = counterEl.querySelector('#decrement');
    increaseEl.click();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(1);
    decreaseEl.click();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(0);
    expect(el.textContent).toEqual('0');
  });

  it('decrement button should be disabled when value is 0', function() {
    const el = counterEl.querySelector('#counterValue');
    expect(component.counter.value).toEqual(0);
    const decreaseEl = counterEl.querySelector('#decrement');
    expect(decreaseEl.disabled).toBeTruthy();
  });
});
