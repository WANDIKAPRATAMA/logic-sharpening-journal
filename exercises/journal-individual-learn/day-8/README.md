## Documentation

# Task: `each` Function

In this task, you are required to write a function named `each` that takes two parameters: an integer `n` and a list of integers (which may be empty). The function should return a list containing every nth element from the input list.

## Rules:

1. If `n < 0`, count using the absolute value of `n` from the end of the list.
2. If `n == 0`, return an empty list.

## Example Usage:

- `each(0, [1, 2, 3, 4, 5, 6])` returns `[]`
- `each(1, [1, 2, 3, 4, 5, 6])` returns `[1, 2, 3, 4, 5, 6]`
- `each(-1, [1, 2, 3, 4, 5, 6])` returns `[6, 5, 4, 3, 2, 1]`
- `each(2, [1, 2, 3, 4, 5, 6])` returns `[2, 4, 6]`
- `each(-2, [1, 2, 3, 4, 5, 6])` returns `[5, 3, 1]`
- `each(3, [1, 2])` returns `[]`
- `each(-3, [1, 2])` returns `[]`
- `each(5, [1, 2, 3, 4, 5, 6, 7])` returns `[5]`
- `each(-5, [1, 2, 3, 4, 5, 6, 7])` returns `[3]`

## Description:

The `each` function is designed to provide flexibility in selecting elements from a list based on the index specified by the parameter `n`. By using either a positive or negative value of `n`, you can access elements from the beginning or the end of the list, offering an efficient way to extract data from list structures.

---
