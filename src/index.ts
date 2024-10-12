import type { EulerSolution } from './types'
import { SOLUTIONS } from './solutions'
import { U_Timer } from './utils'

const solution = getProblemNumber()
if (solution === 'all') {
  throw Error('Missing all solutions implementation')
}

executeSolution(solution)
process.exit(0)

function getProblemNumber (): EulerSolution | 'all' {
  const arg = process.argv[2]
  if (!arg) return 'all'

  const solution = SOLUTIONS[arg]
  if (!solution) return 'all'

  return solution
}

function executeSolution (solution: EulerSolution): void {
  const stopTimer = U_Timer()

  const result = solution.solve()
  const duration = stopTimer()

  console.log(`Solution ${solution.id} - result '${result}' in ${duration} ms`)
}
