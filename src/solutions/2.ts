import type { EulerSolution } from '../types'

export const S2: EulerSolution = { id: 2, solve }

function solve (): null | number {
  let result = 0

  let nMinus2 = 1
  let nMinus1 = 1
  let fibonacci = 0

  while (fibonacci < 4000000) {
    fibonacci = nMinus1 + nMinus2
    if (fibonacci % 2 === 0) result += fibonacci

    nMinus2 = nMinus1
    nMinus1 = fibonacci
  }

  return result
}
