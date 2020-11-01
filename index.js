const rust = import('./pkg');

rust
  .then(m => m.greet('hello world!'))
  .catch(console.error);
