## Problem Description

Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. The X will be represented by 1's and the rest will be 0's.

### Examples

- ```
  5 --->   [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]

    6 ---> [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]
  ```

### Constraints

- The input string can contain any characters.
- The output should always be a square matrix.
