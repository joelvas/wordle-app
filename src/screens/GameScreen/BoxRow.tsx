import { FlatList, StyleSheet, ListRenderItemInfo, View } from 'react-native'
import { Box } from '../../models/Box.model'
import BoxItem from './BoxItem'

interface Props {
  row: Box[]
  height: number
}

const BoxRow = ({ row, height }: Props) => {
  return (
    <FlatList
      style={[styles.container, { maxHeight: height }]}
      data={row}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
      renderItem={({ item: box }: ListRenderItemInfo<Box>) => {
        return <BoxItem width={height} box={box} />
      }}
    />
  )
}
export default BoxRow

const styles = StyleSheet.create({
  container: {}
})
