import ICounter from '../shared/ICounter';

export default class Counter implements ICounter{
  step = 1;
  value = 0;

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value -= this.step;
  }
}
