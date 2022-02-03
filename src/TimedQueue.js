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


const Queue = require("./Queue");

class TimedQueue extends Queue {
    /**
     * Creates a new queue that can implement delay between each element
     * @param {number} delay The delay between each element {@default 200}
     */
    constructor(delay = 100) {
        super();
        this.delay = delay; // The delay between each element
        this.delaying = null; // Is there currently a delay happening
    }

    /**
     * Starts the queue if not started already
     * @returns {void}
     */
    start() {
        if (!this.delaying && this.peek()) this.runNext();
    }

    /**
     * Stops the queue from running
     * @returns {void}
     */
    stop() {
        // Destroy current timeout
        if (this.delaying) clearTimeout(this.delaying);
    
        // Reset variables
        this.delaying = null;
    }

    /**
     * Adds an element to the queue
     * @param {any} element The data to queue
     * @returns {void}
     */
    enqueue(element) {
        // Check for required callback
        if (!element || !element?.callback || typeof element?.callback != "function") return;
        // Add defaults
        element.data = element.data || [];
        element.delay = element.delay || this.delay;
        // Push to queue
        this.elements.push(element);

        if (!this.delaying) this.runNext();
    }

    /**
     * Runs the next element in the queue
     * @returns {void}
     */
    runNext() {
        if (this.delaying) return;
        if (!this.peek()) {
            this.stop();
            return;
        }

        // Store this in self due to interval
        let self = this;
        // Get next element (only needed for delay)
        let element = self.dequeue();

        // Create timeout
        this.delaying = setTimeout(() => {
            // Execute callback
            if (element.data) element.callback(...element.data);
            else element.callback();

            // Run next element
            self.delaying = null;
            if (self.peek()) self.runNext();
        }, element.delay);
    }
}

module.exports = TimedQueue;