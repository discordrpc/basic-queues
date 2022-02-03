# Queues

[![npm version](https://badge.fury.io/js/basic-queues.svg)](https://badge.fury.io/js/basic-queues)

A basic JavaScript package that allows a user to create their own queues.

## Features
- Default queue, allows for enqueuing, dequeuing, peeking, etc...
- Timed queue, executes a callback after a set delay (modifiable on a per-element basis)

## Installation

To install this package you will need Node.js and Node Package Manager (npm). If you don't have these installed head on over to the [Node.js downloads](https://nodejs.org/en/download/) and install your desired version.

Then, run `npm install basic-queues` to add the package to any current project.

## Usage

To use the package first import it into any file (examples use ES6)

```javascript
// Method 1
import * as Queues from "basic-queues";

// Method 2
import { Queue, TimedQueue } from "basic-queues";
```

To then use a queue create a new object, a queue will be created and made ready for use.

#### Default Queue
The following methods are available fir the default queue.

```typescript
enqueue(element: any): void // Adds an element to the queue

dequeue(): any // Removes the first element in the queue and returns it

isEmpty(): boolean // Returns if true if the queue is empty

peek(): any // Returns the first element in the queue or undefined if the queue is empty

length(): number // Returns the length of the queue
```


#### Timed Queue (Extends Default Queue)
All methods available in the default queue are inherited in the timed queue. Furthermore, the following unique methods are available.

```typescript
start(): void // Starts running the queue

stop(): void // Stops running the queue

enqueue(element: TimedQueueElement): void // Adds an element to the queue

runNext(): void // Runs the next element in the queue if the queue isn't running
```

#### Timed Queue Element
The timed queue element is the element that should be supplied when using `TimedQueue.enqueue(element)`. The element must be a JSON object containing a callback and optionally; arguments and a custom delay (in ms).

```typescript
{
    callback: Function, // Callback
    args?: any[], // Arguments supplied to the callback
    delay?: number // In milliseconds
}
```