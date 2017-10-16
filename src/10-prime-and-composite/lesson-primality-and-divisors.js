/**
 * Return divisors of a given number
 * @param N
 * @returns {*}
 */

export function divisorsLinear(N) {
  const divisors = [];
  for(let i = 0; i < N; i++) {
    if (N % i === 0) {
      divisors.push(i);
    }
  }
  divisors.push(N);
  return divisors;
}

/**
 * Return divisors of a given number
 * @param N
 * @returns {*}
 */

export function divisorsSquareRoot(N) {
  const divisors = [];
  const nSqrt = Math.floor(Math.sqrt(N));
  for(let i = 0; i <= nSqrt; i++) {
    if (N % i === 0) {
      divisors.push(i);
      divisors.push(N/i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

/**
 * Check whether the given number is prime or not
 * @param N
 * @returns {boolean}
 */
export function primality(N) {
  if (N === 1) return false;
  const nSqrt = Math.floor(Math.sqrt(N));
  for(let i = 2; i <= nSqrt; i++) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
}