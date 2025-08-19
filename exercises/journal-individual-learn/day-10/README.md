# Round Robin Scheduling Algorithm

## Overview

Scheduling is how the processor decides which jobs (processes) get to use the processor and for how long. This can lead to issues, such as a long-running process taking up the entire CPU and freezing all other processes. One solution to this problem is the Round-Robin scheduling algorithm, which you will be implementing in this Kata.

## How Round-Robin Works

Round-Robin scheduling works by queuing jobs in a First In First Out (FIFO) manner. Each process is allocated a short time slice. If a process is not finished within its time slice, it yields the processor and moves to the back of the queue.

## Function Specification

You will implement the following function:

```javascript
function roundRobin(jobs, slice, index)
```

### Parameters

1. **jobs**: A non-empty array of positive integers. It represents the queue and the clock cycles (cc) remaining until each job is finished.
2. **slice**: A positive integer. It is the amount of clock cycles that each job is given before yielding to the next job in the queue.
3. **index**: A positive integer. This is the index of the job we are interested in.

### Returns

The function should return the number of clock cycles until the job at the specified index is finished.

## Example

```javascript
roundRobin([10, 20, 1], 5, 0);
```

### Execution Steps

- At 0 cc: `[10, 20, 1]` - `jobs[0]` starts
- After 5 cc: `[5, 20, 1]` - `jobs[0]` yields, `jobs[1]` starts
- After 10 cc: `[5, 15, 1]` - `jobs[1]` yields, `jobs[2]` starts
- After 11 cc: `[5, 15, 0]` - `jobs[2]` finishes, `jobs[0]` starts
- After 16 cc: `[0, 15, 0]` - `jobs[0]` finishes

Thus, the result is:

```javascript
roundRobin([10, 20, 1], 5, 0) == 16;
```

### Assumptions

You can assume that the processor can switch jobs between clock cycles without adding to the total time.

## Conclusion

Implementing the Round-Robin scheduling algorithm is a great way to understand how job scheduling works in operating systems. This algorithm ensures that all processes get a fair share of CPU time, preventing any single process from monopolizing the CPU.
