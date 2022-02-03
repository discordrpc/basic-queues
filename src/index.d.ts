export class Queue {
    public enqueue(element: any): void;
    public dequeue(): any;
    public isEmpty(): boolean;
    public peek(): any | undefined;
    public length(): number;
}

export class TimedQueue extends Queue {
    public start(): void;
    public stop(): void;
    public override enqueue(element: any): void;
    public runNext(): void;
}