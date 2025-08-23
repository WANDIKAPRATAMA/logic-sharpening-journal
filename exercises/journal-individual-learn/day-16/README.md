Here’s a revised version of your README.md that improves clarity and structure:

---

# Chess Piece Value Calculator

## Task

Complete the function that accepts two arguments: an 8x8 array representing a chess board and a string. Depending on the value of the string, which can be either "white" or "black", calculate the total value of the pieces on the board for the corresponding player.

### Board Representation

- Empty fields will be marked as a space (`" "`).
- Fields with pieces will be represented as follows:
  - `"w-king"` // meaning white king
  - `"b-bishop"` // a black bishop
  - `"w-pawn"` // a white pawn
  - ...and so on.

### Piece Values

An object is provided that holds the value of each piece:

```javascript
const hash = Object.freeze({
  queen: 9,
  rook: 5,
  bishop: 3,
  knight: 3,
  pawn: 1,
});
```

Note: The value of a king cannot be estimated because the game would be over without it, so **DO NOT** take into consideration the value of the king. You will not be tested for invalid input.

### Examples

1. For the following board:

```javascript
[
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", " ", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
],
  "white";
```

This should return **14**, because white has a queen (9) and a rook (5). The same board should return **9** for black (one queen).

2. For the following board:

```javascript
[
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", "b-pawn", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", "w-pawn", " ", " ", " "],
  [" ", " ", " ", " ", " ", "w-bishop", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "b-pawn", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
],
  "white";
```

This should return **18** for white (queen, rook, pawn, bishop). The same board should return **11** for black (queen, 2 pawns).

## Happy coding, warrior!

---

This version organizes the information more clearly, uses consistent formatting, and improves readability.
