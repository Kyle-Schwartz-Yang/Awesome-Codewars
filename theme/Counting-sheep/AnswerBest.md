
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example:

```js
  [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
```

The correct answer would be 17.


```js
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
```

- Цикл for

```js
function countSheeps(sheep) {
  // TODO May the force be with you
  var num = 0;
  
  for(var i = 0; i < sheep.length; i++)
    if(sheep[i] == true)
      num++;
      
  return num;
}
```

