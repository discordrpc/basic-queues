export class Queue {
  public enqueue(element: any): void;
  public dequeue(): any;
  public isEmpty(): boolean;
  public peek(): any | undefined;
  public length(): number;
}

export interface TimedQueueElement {
  callback: Function;
  args?: any[];
  delay?: number;
}

export class TimedQueue extends Queue {
  constructor(delay: number);
  public start(): void;
  public stop(): void;
  public override enqueue(element: TimedQueueElement): void;
  public runNext(): void;
}
