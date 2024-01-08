export function getFirstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

export const displayValue = (numbers: number[]): number => {
  const firstElement: number | undefined = getFirstElement(numbers);
  return firstElement;
};
