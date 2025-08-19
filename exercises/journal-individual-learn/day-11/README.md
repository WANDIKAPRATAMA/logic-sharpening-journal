## Problem Description

Given a name, turn that name into a perfect square matrix (a nested array where the number of arrays is equal to the length of each array).

You will need to add periods (.) to the end of the name if necessary to complete the matrix.

If the name has a length of 0, return "name must be at least one letter".

### Examples

- For the input ```
  "Bill"

  ```

  , the output should be:

  $$
  \\begin{bmatrix}
  "B" & "i" \\
  "l" & "l"
  \\end{bmatrix}
  $$
  ```

- For the input ```
  "Frank"

  ```

  , the output should be:

  $$
  \\begin{bmatrix}
  "F" & "r" & "a" \\
  "n" & "k" & "." \\
  "." & "." & "."
  \\end{bmatrix}
  $$
  ```

### Constraints

- The input string can contain any characters.
- The output should always be a square matrix.
