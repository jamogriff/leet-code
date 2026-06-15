/*
 * https://leetcode.com/problems/two-sum/description/
* */
export function two_sum(numbers, targetSum) {
  let indexMap = new Map();
  let coordinates = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // Note: this doesn't work if duplicate numbers are present
    indexMap.set(number, i);

    let remainder = targetSum - number;

    if (indexMap.has(remainder)) {
      // we've encountered this number already
      coordinates.push(indexMap.get(remainder));
      coordinates.push(i);
      break;
    }
  }

  return coordinates;
}

/*
 * https://leetcode.com/problems/contains-duplicate/description/
 */
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

/*
 * https://leetcode.com/problems/valid-anagram/description/
 */
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
 * https://leetcode.com/problems/group-anagrams/description/
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

/*
 * https://leetcode.com/problems/valid-palindrome/description/
 */
export function is_palindrome(string) {
  let noAlphanumericChars = string.replaceAll(/[\W]/g, '');
  let processedString = noAlphanumericChars.toLowerCase();

  let isPalindrome = true;
  let backwardIndex = processedString.length - 1;
  for (let forwardIndex = 0; forwardIndex < backwardIndex; forwardIndex++) {
    if (processedString[forwardIndex] === processedString[backwardIndex]) {
      backwardIndex--;
      continue;
    } else {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

export function get_largest_palindrome(string) {
  let palindromes = new Map();

  // Iterate over every character in string
  for (let i = 1; i < string.length; i++) {
    let centralNode = string[i];
    // Traverse outward with two pointers
    let leftIndex = i - 1;
    let rightIndex = i + 1;

    if (string[leftIndex] === string[rightIndex]) {
      // Record a new palindrome occurrence
      palindromes.set(i, string.substring(leftIndex, rightIndex + 1)); // Confound you substring!
    }

    while (leftIndex >= 0 && rightIndex <= string.length - 1) {
      if (string[leftIndex] === string[rightIndex]) {
        // Update palindrome entry and continue traversing outward
        palindromes.set(i, string.substring(leftIndex, rightIndex + 1))
        leftIndex--;
        rightIndex++;
      } else {
        break;
      }
    }
  }

  // Sort palindromes by length
  let strings = [...palindromes.values()];
  strings.sort((a, b) => a.length - b.length) 

  // Return lengthiest one
  return strings.pop();
}
