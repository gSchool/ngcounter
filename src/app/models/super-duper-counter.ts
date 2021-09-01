import { AutoCounter } from '../auto-counter';

export class SuperDuperCounter implements AutoCounter{
  step = 1;
  value = 0;

  start() {
    setInterval(() => {
      this.value += this.step;
    }, 1000);
  }
}
