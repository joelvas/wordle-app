import React from 'react'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { Box, BoxStatus } from '../models/Box.model'
import useBoxesValidations from './useBoxesValidations'
import useNotificacionStore from '../store/useNotificationStore'

const rowsNumber = 6

interface Props {
  word: string
}
const useBoxesHandler = ({ word }: Props) => {
  const [showWinnerModal, setShowWinnerModal] = React.useState(false)
  const [showLooserModal, setShowLooserModal] = React.useState(false)
  const [rows, setRows] = React.useState<Box[][]>([])
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)
  const { validateRow } = useBoxesValidations()
  const { notifyError } = useNotificacionStore()

  const getEmptyRow = () => {
    return Array.from({ length: word.length }, (v, i) => {
      return {
        id: uuidv4(),
        letter: '',
        status: BoxStatus.EMPTY,
        completed: false,
        active: false
      }
    }) as Box[]
  }

  const createDefaultRows = () => {
    const emptyRows = Array.from({ length: rowsNumber }, (v, i) =>
      getEmptyRow()
    )
    setRows(emptyRows)
  }

  React.useEffect(() => {
    createDefaultRows()
  }, [word])

  const setLetter = (letter: string) => {
    if (!rows[y]) {
      setX(0)
      setY(0)
      return
    }
    if (x + 1 > rows[y]?.length) return

    const newRows = [...rows]
    newRows[y][x].letter = letter
    setRows(newRows)
    setX((val) => val + 1)
  }

  const removeLetter = () => {
    if (x === 0) return

    const newRows = [...rows]
    newRows[y][x - 1].letter = ''
    setRows(newRows)
    setX((val) => val - 1)
  }

  const validateWord = () => {
    if (rows[y]?.length > x) {
      notifyError({ message: 'You must complete all the boxes!' })
      return
    }
    const result = validateRow({ word, rows: rows[y] })
    const win = result.every((item) => item.status === BoxStatus.MATCH)
    const loose = !win && rows.length === y + 1

    if (win) {
      setShowWinnerModal(true)
    } else if (loose) {
      setShowLooserModal(true)
    } else {
      const newRows = [...rows]
      newRows[y] = result
      setRows(newRows)
      setY((value) => value + 1)
      setX(0)
    }
  }
  const restart = () => {
    setX(0)
    setY(0)
    createDefaultRows()
  }

  return {
    rows,
    setLetter,
    removeLetter,
    validateWord,
    restart,
    showWinnerModal,
    setShowWinnerModal,
    showLooserModal,
    setShowLooserModal
  }
}
export default useBoxesHandler
