export function U_Timer (): (() => number) {
  const startTime = process.hrtime()

  return () => {
    const diff = process.hrtime(startTime)
    return diff[0] * 1000000 + diff[1] / 1000
  }
}
