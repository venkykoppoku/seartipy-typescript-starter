
import {  Range  } from 'immutable'


export const factorial = (n: number): number => Range(1, n + 1).reduce((x , y)=> x * y ,1)

export const ncr = ( n: number , r: number): number => factorial(n)/(factorial(n-r)* factorial(r)) 

export const pascalLine = ( n: number)=>  Range(0, n).map(r => ncr(n - 1,r) )

export const pascalTriangle = (n: number) => Range(1, n + 1).map ( l => pascalLine(l))

export const isPrime = (n: number) => !(Range(2,n).some(r => (n % r) === 0));

 

export const primeNumbers = (n: number) => Range(2, n + 1).filter(p => isPrime(p))

