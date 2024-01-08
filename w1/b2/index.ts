export interface IPerson {
  name: string
  age: number
  email: string
}

export const displayInfor = (person: IPerson): IPerson => {
  return person
}
