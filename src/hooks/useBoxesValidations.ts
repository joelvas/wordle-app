import { BoxStatus, Box } from './../models/Box.model'

interface RowValidation {
  rows: Box[]
  word: string
}
const useBoxesValidations = () => {
  const validateRow = ({ rows, word }: RowValidation) => {
    const entryWord: string[] = rows.map((box) => box.letter)
    const principalWord: string[] = word.toUpperCase().split('')
    const newRows = rows.map((row, i) => {
      if (entryWord[i] === principalWord[i]) {
        row.status = BoxStatus.MATCH
      } else if (
        principalWord.slice(0, i).includes(entryWord[i])
          ? principalWord.slice(0, i).includes(entryWord[i])
          : principalWord.slice(i, -1).includes(entryWord[i])
      ) {
        row.status = BoxStatus.EXIST
      } else {
        row.status = BoxStatus.FAIL
      }
      row.completed = true
      return row
    })
    return newRows
  }
  return { validateRow }
}
export default useBoxesValidations
