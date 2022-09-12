function loadGrain(levels) {
  // your code here
  const result = {
    grain: 0,
    maxHeight: 0,
  };

  const highestPoint = Math.max(...levels);
  const highestPointIdx = levels.indexOf(highestPoint);

  console.log("highestPoint", highestPoint);
  console.log("highestPointIdx", highestPointIdx);

  function getGrain(i) {
      const currentHeight = levels.at(i);
      

    if (result.maxHeight < currentHeight) result.maxHeight = currentHeight;

    result.grain += result.maxHeight - currentHeight;
  }

  for (let i = 0; i < highestPointIdx; i += 1) {
    getGrain(i);
  }

  for (let i = levels.length - 1; i > highestPointIdx; i -= 1) {
    getGrain(i);
  }

  return result.grain;
}

// Приклади тестів
console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
