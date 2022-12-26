import FlexContainer from '../flex/FlexContainer'
import { ListRenderItemInfo, FlatList } from 'react-native'
import KeyboardRow from './KeyboardRow'
import useComputedKeyborad from './useComputedKeyboard'

interface Props {
  onPressKey: (key: string) => void
}
const QwertyKeyboard = ({ onPressKey }: Props) => {
  const { rows } = useComputedKeyborad()

  const pressKeyHandler = (key: string) => {
    onPressKey(key)
  }

  return (
    <FlexContainer>
      <FlatList
        data={rows}
        ItemSeparatorComponent={() => <></>}
        renderItem={({ item }: ListRenderItemInfo<string[]>) => (
          <KeyboardRow onPressKey={pressKeyHandler} row={item} />
        )}
      />
    </FlexContainer>
  )
}
export default QwertyKeyboard
