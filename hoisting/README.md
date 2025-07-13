# 📚 JavaScript Hoisting

Hoisting is JavaScript's default behavior of moving **declarations** to the top of the scope during the memory creation phase.

## 🔑 Key Points

- `var` declarations are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone)
- Function declarations are hoisted completely
- Function expressions are **not** hoisted as functions

## 📌 Code Examples

```js
console.log(a); // undefined
var a = 5;

try {
  console.log(b); // ReferenceError
  let b = 10;
} catch (err) {
  console.log("Error:", err.message);
}
