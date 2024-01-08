export const sumArrayNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0)
}
