import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { Box, BoxStatusColor, BoxStatus } from '../../models/Box.model'

interface Props {
  box: Box
  width: number
}

const BoxItem = ({ box, width }: Props) => {
  const { letter } = box
  const containerStyle = {
    width,
    height: width,
    backgroundColor: BoxStatusColor[box.status],
    borderColor: box.status === BoxStatus.EMPTY ? '#a7adc0' : 'transparent'
  }
  const textStyle = {
    fontSize: width / 2,
    color: box.status === BoxStatus.EMPTY ? 'black' : 'white',
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{letter}</Text>
    </View>
  )
}
export default BoxItem

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5
  },
  text: {
    textAlign: 'center',
  }
})
