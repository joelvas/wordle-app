import React from 'react'
import WinnerModal from './WinnerModal'
import FlexContainer from '../../components/ui/flex/FlexContainer'
import LooserModal from './LosserModal'
import {
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  View,
  Dimensions,
  Text
} from 'react-native'
import { Button } from 'react-native-paper'
import BoxRow from './BoxRow'
import { Box } from '../../models/Box.model'
import QwertyKeyboard from '../../components/ui/QuertyKeyborad/QwertyKeyboard'
import useBoxesHandler from '../../hooks/useBoxesHandler'
import { data } from '../../database/data'

const separatorHeight = 5
const GameScreen = () => {
  const [word, setWord] = React.useState('')
  const {
    rows,
    setLetter,
    removeLetter,
    validateWord,
    restart,
    showWinnerModal,
    setShowWinnerModal,
    showLooserModal,
    setShowLooserModal
  } = useBoxesHandler({
    word
  })

  React.useEffect(() => {
    if (data.length > 0) {
      const newWord = data[Math.floor(Math.random() * data.length)]
      setWord(newWord)
    }
  }, [data])

  React.useEffect(() => {
    if (rows && rows.length > 0) {
    }
  }, [rows])

  const boxHeight = React.useMemo(() => {
    return Dimensions.get('window').width / word.length - 16
  }, [Dimensions, word])

  const containerHeight = React.useMemo(() => {
    return boxHeight * rows.length + separatorHeight * (rows.length - 1)
  }, [boxHeight, rows, separatorHeight])

  const pressKeyHandler = (key: string) => {
    if (key === 'DELETE') {
      removeLetter()
    } else if (key === 'ENTER') {
      validateWord()
    } else {
      setLetter(key)
    }
  }

  const pressChangeWordHandler = () => {
    restart()
    setWord(data[Math.floor(Math.random() * data.length)])
  }

  const pressPlayAgainHandler = () => {
    setShowWinnerModal(false)
    setShowLooserModal(false)
    pressChangeWordHandler()
  }

  console.log(word)

  if (word.trim() === '') return null
  return (
    <FlexContainer style={[styles.container]}>
      <Button mode="contained" onPress={pressChangeWordHandler}>
        <Text>Change word</Text>
      </Button>
      <FlexContainer style={{ paddingVertical: 15, marginBottom: 230}}>
        <FlatList
          style={[{ maxHeight: containerHeight }]}
          data={rows}
          horizontal={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: separatorHeight }}></View>
          )}
          renderItem={({ item: row }: ListRenderItemInfo<Box[]>) => (
            <BoxRow height={boxHeight} row={row} />
          )}
        />
      </FlexContainer>
      <FlexContainer style={{position: 'absolute', bottom: 30, height: 150}}>
        <QwertyKeyboard onPressKey={pressKeyHandler} />
      </FlexContainer>
      <WinnerModal
        visible={showWinnerModal}
        onPressPlayAgain={pressPlayAgainHandler}
      />
      <LooserModal
        word={word}
        visible={showLooserModal}
        onPressPlayAgain={pressPlayAgainHandler}
      />
    </FlexContainer>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }
})
