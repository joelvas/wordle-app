import { ListRenderItemInfo, FlatList, StyleSheet } from 'react-native'
import KeyboardKey from './KeyboardKey'

interface RowProps {
  row: string[]
  onPressKey: (key: string) => void
}
const KeyboardRow = ({ row, onPressKey }: RowProps) => {
  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={row}
      horizontal={true}
      ItemSeparatorComponent={() => <></>}
      renderItem={({ item }: ListRenderItemInfo<string>) => (
        <KeyboardKey onPressKey={onPressKey} text={item} />
      )}
    />
  )
}

export default KeyboardRow

const styles = StyleSheet.create({
  content: { justifyContent: 'center', width: '100%' }
})
