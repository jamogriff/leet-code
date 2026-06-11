/*
 * TODO: should refactor/attempt again for more efficient solution
 */
export function two_sum(array, targetSum) {
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

export function is_anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let containsAnagram = true;
  for (const letter of string1) {
    if (!string2.includes(letter)) {
      containsAnagram = false;
      break;
    }
  }

  return containsAnagram;
}

/*
 * TODO: should refactor/attempt again
 */
export function group_anagrams(possibleAnagrams) {
  let groupedAnagrams = [];
  let indiciesMatched = [];
  for (let i = 0; i < possibleAnagrams.length; i++) {
    for (let j = 0; j < possibleAnagrams.length; j++) {
      if (
        i === j ||
        indiciesMatched.includes(i) ||
        indiciesMatched.includes(j)
      ) {
        continue;
      }

      if (is_anagram(possibleAnagrams[i], possibleAnagrams[j])) {
        // Check output array to find correct place to insert
        const insertedIntoGroup = false;
        for (let k = 0; k < groupedAnagrams.length; k++) {
          if (is_anagram(groupedAnagrams[k][0], possibleAnagrams[i])) {
            const newGroup = [...groupedAnagrams[k], possibleAnagrams[i], possibleAnagrams[j]];
            groupedAnagrams[k] = newGroup;
            insertedIntoGroup = true;
            break;
          }
        }
        
        if (!insertedIntoGroup) {
          groupedAnagrams.push([possibleAnagrams[i], possibleAnagrams[j]]);
        }

        // Log matched indicies so duplicates are not added
        let newIndiciesMatched = [...indiciesMatched, i, j];
        indiciesMatched = newIndiciesMatched;
      }
    }

    if (!indiciesMatched.includes(i)) {
      groupedAnagrams.push([possibleAnagrams[i]]);
      indiciesMatched.push(i);
    }
  }

  return groupedAnagrams;
}

