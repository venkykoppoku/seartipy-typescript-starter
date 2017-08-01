import {factorial, ncr , pascalLine ,isPrime,primeNumbers} from './index';
import {is, List} from 'immutable'

test('factorial of  0  should be 1', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial of  1  should be 1', () => {
  expect(factorial(5)).toBe(120);
});


test('factorial of  5  should be 120', () => {
  expect(factorial(5)).toBe(120);
});


test('ncr of  6 and 0  should be 1', () => {
  expect(ncr(6,0)).toBe(1);
});

test('ncr of  6 and 6  should be 1', () => {
  expect(ncr(6,6)).toBe(1);
});

test('ncr of  6 and 2  should be 15', () => {
  expect(ncr(6,2)).toBe(15);
});

test('pascalLine of 1 should be [1]', () =>  {
  
  expect(is(pascalLine(1),List([1]))).toBe(true);
});

test('pascalLine of 2 should be [1,1]', () =>  {
  
  expect(is(pascalLine(2),List([1,1]))).toBe(true);
});

test('pascalLine of 3 should be [1,2,1]', () =>  {
  
  expect(is(pascalLine(3),List([1,2,1]))).toBe(true);
});


test ('isPrime of 2 is prime',() => {
  expect(isPrime(2)).toBe(true)
})

test('isPrime of 3 is prime ', () => {
  expect(isPrime(3)).toBe(true)
})



test('primeNumbers in 5 to be [2,3,5]', () => {
 expect(is(primeNumbers(5),List([2,3,5]))).toBe(true)
})

test('primeNumbers in 10 to be [2,3,5,7]',() => {
  expect(is(primeNumbers(10),List([2,3,5,7]))).toBe(true)
})