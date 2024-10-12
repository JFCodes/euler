
export class U_PrimeSieveGenerator {
  UPPER_BOUND: number
  primeArray: boolean[]

  constructor (upperBound: number) {
    this.UPPER_BOUND = upperBound
    this.primeArray = []

    this.generate()
  }

  public isPrime (test: number) {
    this.upperLimitWarning(test)
    return this.primeArray[test]
  }

  public getPrimesArray (limit: number): number[] {
    this.upperLimitWarning(limit)

    let numberPrimeArray = []
    for (let index = 1; index <= limit; index++) {
      if (this.primeArray[index]) numberPrimeArray.push(index)
    } 

    return numberPrimeArray
  }

  public getPrimePosition (position: number): number {
    this.upperLimitWarning(position)
    
    let counter = 0
    // 1 is not prime (for project euler at least)
    // start at 2
    for (let i = 2; i <= this.UPPER_BOUND; i++) {
      if (this.primeArray[i]) counter++
      if (counter === position) return i
    }

    console.warn(`Could not find '${position}th' prime in the upper bound limit of '${this.UPPER_BOUND}'`)
    return 0
  }

  private generate () {
    // Implements the prime sieve generator algorithm
    
    // Initiate the array
    for (let index = 0; index <= this.UPPER_BOUND; index++) {
      this.primeArray[index] = true
    }

    // Fix 0 and 1
    this.primeArray[0] = this.primeArray[1] = false

    // Cicle multitples
    for (let index = 2; index <= this.UPPER_BOUND; index++) {
      for(let multiple = 2 * index; multiple <= this.UPPER_BOUND; multiple += index) {
        this.primeArray[multiple] = false
      }
    }
  }

  private upperLimitWarning (position: number) {
    if (position >= this.primeArray.length) {
      console.warn(`Target '${position}th' is higher then upper bound limit of '${this.UPPER_BOUND}'`)
    }
  }
}