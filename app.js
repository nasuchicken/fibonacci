'use strict';

const map = new Map;
map.set(0,0)
map.set(1,1)

function fib(n) {
    
  if (map.has(n)) {
    return map.get(n);
  } 

  const value = fib(n-1) + fib(n-2);
  map.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}