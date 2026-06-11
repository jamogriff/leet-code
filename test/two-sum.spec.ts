import { expect, test } from 'vitest';
import { two_sum } from '../src/two-sum.ts';

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
