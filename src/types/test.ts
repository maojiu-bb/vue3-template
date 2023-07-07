// You can define the data type at this folder

// Example

export interface Itest {
  a: number
  b: string
}

export type T = Itest

export class Test {
  test: Itest | undefined
}
