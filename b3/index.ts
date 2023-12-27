export function getFirstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined
}

export const displayValue = (): number => {
  const numbers: number[] = [12, 3, 45, 6]
  const firstElement: number | undefined = getFirstElement(numbers)
  return firstElement
}
