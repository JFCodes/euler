import type { EulerSolution } from './types'

import { S1 } from './solutions/1'
import { S2 } from './solutions/2'
import { S3 } from './solutions/3'
import { S4 } from './solutions/4'

export const SOLUTIONS: Record<string, EulerSolution> = {
  '1': S1,
  '2': S2,
  '3': S3,
  '4': S4
}
