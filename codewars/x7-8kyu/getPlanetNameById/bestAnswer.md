```js
function getPlanetName(id) {
  var name = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  };

  return name[id];
}
```

### Short Answer

```js
const getPlanetName = (id) =>
  [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ][id - 1];
```
