export const U_Testers = {
  isPalindrome
}

function isPalindrome (test: number): boolean {
  let testString: string = String(test)
  let stringLength: number = testString.length
  let middleTerm: number = Math.floor(testString.length / 2)

  for (let i = 0; i <= middleTerm; i++) {
      if (testString[i] !== testString[stringLength - 1 - i]) return false
  }
  return true
}
