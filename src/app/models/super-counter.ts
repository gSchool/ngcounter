import ICounter from '../shared/ICounter';

export default class SuperCounter implements ICounter {
  step = 3;
  value = 0;

  increment() {
    this.value += this.step;
  }

  decrement() {
    if (this.value - 3 > 0) {
      this.value -= this.step;
    }
  }
}
