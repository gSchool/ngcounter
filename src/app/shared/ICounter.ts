interface ICounter {
  value: number;
  step: number;

  increment(): void;
  decrement(): void;
}

export default ICounter;
