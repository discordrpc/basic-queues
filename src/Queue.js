/**

MIT License

Copyright (c) 2022 Lukas Hammer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

class Queue {
  /**
   * Creates new array to store elements in the queue
   */
  constructor() {
    this.elements = [];
    this.queuing = false;
  }

  /**
   * Adds an element to the queue
   * @param {any} element The data to queue
   * @returns {void}
   */
  enqueue(element) {
    this.elements.push(element);
  }

  /**
   * Removes the first element from the queue
   * @returns {any} The first element in the queue
   */
  dequeue() {
    return this.elements.shift();
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean} Is the queue empty
   */
  isEmpty() {
    return this.elements.length == 0;
  }

  /**
   * Returns the first element in the queue without dequeuing it
   * @returns {any} The first element in the queue
   */
  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  /**
   * Shows the current length of the queue
   * @returns {number} The length of the queue
   */
  length() {
    return this.elements.length;
  }
}

module.exports = Queue;
