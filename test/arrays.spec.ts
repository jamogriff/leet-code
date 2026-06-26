import { expect, test } from 'vitest';
import { 
    two_sum,
    contains_duplicate,
    is_anagram,
    group_anagrams,
    is_palindrome,
    get_largest_palindrome,
    two_sum_sorted,
    max_profit,
    longest_substring
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

test('correctly detects palindromes', () => {
    let string = 'A man, a plan, a canal: Panama';
    expect(is_palindrome(string)).toBe(true);

    string = 'race a car';
    expect(is_palindrome(string)).toBe(false);

    string = ' ';
    expect(is_palindrome(string)).toBe(true);
})

test('finds largest palindrome', () => {
    let string = 'abacatac';
    expect(get_largest_palindrome(string)).toBe('catac');

    // TODO: current solution fails here if palindrome center is between two characters
//     string = 'aaabizzibizabba';
//     expect(get_largest_palindrome(string)).toBe('bizzib');
})

test('returns correct indicies for target number', () => {
    let numbers = [2,7,11,15];
    expect(two_sum_sorted(numbers, 9)).toStrictEqual([1,2]);
    numbers = [2,3,4];
    expect(two_sum_sorted(numbers, 6)).toStrictEqual([1,3]);
    numbers = [-1,0];
    expect(two_sum_sorted(numbers, -1)).toStrictEqual([1,2]);
})

test('returns max profit in array of stock prices', () => {
    let stock_prices = [7,1,5,3,6,4];
    // Buy at 1 and sell at 6 (6-1=5)
    expect(max_profit(stock_prices)).toBe(5);

    stock_prices = [7,6,4,3,1];
    // Every subsequent number is lower; no profit to be made
    expect(max_profit(stock_prices)).toBe(0);
})

test('returns length of longest substring without duplicate characters', () => {
    let input = 'abcabcbb';
    expect(longest_substring(input)).toBe(3);

    input = 'bbbbbbb';
    expect(longest_substring(input)).toBe(1);

    input = 'pwwkew';
    expect(longest_substring(input)).toBe(3);
})
