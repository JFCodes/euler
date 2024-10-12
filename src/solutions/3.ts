import type { EulerSolution } from '../types'
import { U_PrimeSieveGenerator } from '../utils'

export const S3: EulerSolution = { id: 3, solve }

function solve (): null | number {
  let result = 0
  
  const LIMIT = 600851475143
  const FIRST_POSSIBLE_FACTOR = Math.ceil(Math.sqrt(LIMIT))
  const primeGenerator = new U_PrimeSieveGenerator(FIRST_POSSIBLE_FACTOR)

  // Cycle from LIMIT until we find the number that is
  // both a prime and the LIMIT FACTOR
  for (let i = FIRST_POSSIBLE_FACTOR; i > 0; i--) {
    // if i is not prime continue
    if (!primeGenerator.isPrime(i)) continue
    // If not a factor of LIMIT continue
    if (LIMIT % i !== 0) continue
    result = i
    break
  }

  return result
}
