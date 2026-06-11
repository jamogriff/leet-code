import { expect, test } from 'vitest';
import { 
    two_sum,
    contains_duplicate,
    is_anagram,
    group_anagrams
} from '../src/arrays.ts';

test('returns correct indicies of two sum problems', () => {
    let array = [2,10,5,9,30];
    let target = 19;
    expect(two_sum(array, target)).toStrictEqual([1, 3])

    array = [4,8,13,88,2,11,1];
    target = 13;
    expect(two_sum(array, target)).toStrictEqual([4, 5])

    array = [-5, -2, 14, 11, -10, 15, -9, -7, 9, 1];
    target = 13;
    expect(two_sum(array, target)).toStrictEqual([1, 5])
})

test('correctly detects duplicate values in array', () => {
    let array = [1,2,3,4,5,6,7,8];
    expect(contains_duplicate(array)).toBe(false)

    array = [3,4,5,6,7,8,9,5];
    expect(contains_duplicate(array)).toBe(true);
})

test('correctly detects anagrams', () => {
    expect(is_anagram('ling', 'ring')).toBe(false)
    expect(is_anagram('adobe', 'beado')).toBe(true)
    expect(is_anagram('bling', 'bing')).toBe(false)
})

test('correctly groups anagrams', () => {
    let array = ['bling', 'ring', 'grin', 'bing', 'glinb']
    // TODO: this test could be better. Fails when order of expected elements is different
    expect(group_anagrams(array)).toStrictEqual([['bling', 'glinb'], ['ring', 'grin'], ['bing']])
})
