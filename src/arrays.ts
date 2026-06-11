export function two_sum(array, targetSum) {
  // TODO: implement more efficient solution
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }

      if (array[i] + array[j] === targetSum) {
        return [i, j];
      }
    }
  }
}

export function contains_duplicate(array) {
  const elementsEncountered = new Set();

  let containsDuplicate = false;
  for (const element of array) {
    if (elementsEncountered.has(element)) {
      containsDuplicate = true;
      break;
    }

    elementsEncountered.add(element);
  }

  return containsDuplicate;
}
