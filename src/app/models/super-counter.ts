import ICounter from '../shared/ICounter';

export default class SuperCounter implements ICounter {
  step = 3;
  value = 0;

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value -= this.step;
  }
}
