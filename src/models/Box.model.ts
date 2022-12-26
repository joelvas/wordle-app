export interface Box {
  id: string
  letter: string
  status: BoxStatus
  active: boolean
  completed: boolean
}

export enum BoxStatus {
  MATCH = 'MATCH',
  EXIST = 'EXIST',
  FAIL = 'FAIL',
  EMPTY = 'EMPTY'
}

export enum BoxStatusColor {
  MATCH = '#79b851',
  EXIST = '#f3c237',
  FAIL = '#a4aec4',
  EMPTY = '#FBFDFF'
}
