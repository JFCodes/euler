import type { EulerSolution } from '../types'

export const S1: EulerSolution = { id: 1, solve }

function solve (): null | number {

  let result = 0

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }

  return result
}
