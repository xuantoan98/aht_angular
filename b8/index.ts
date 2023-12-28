export const caculateFactorial = (number: number): number => {
  if(number === 0 || number === 1)
    return 1
  else
    return number * caculateFactorial(number -1)
};

export const checkPrimeNumbers = (number: number): boolean => {
  if(number <= 1) return false
  for (let index = 2; index < Math.sqrt(number); index++) {
    if(number % index === 0) return false
  }

  return true
}
