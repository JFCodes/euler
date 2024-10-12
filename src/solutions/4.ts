import type { EulerSolution } from '../types'
import { U_Testers } from '../utils'

export const S4: EulerSolution = { id: 4, solve }

function solve (): null | number {
  let result = 0
  let LIMIT = 999 // largest 3 digit number

  // TODO: search for optimization for problem 4
  // How can we make a upperbound decreasing search
  // How can we determine a mathmateically sounded lower limit to start from
  for (let i = 1; i <= LIMIT; i++) {
    for (let j = 1; j <= LIMIT; j++) {
      let product = i * j

      if (U_Testers.isPalindrome(product) && product > result) {
        result = product
      }
    }
  }

  return result
}
