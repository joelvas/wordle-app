import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from 'react-native-paper'

interface KeyboardKeyProps {
  text: string
  onPressKey: (key: string) => void
}
const KeyboardKey = ({ text, onPressKey }: KeyboardKeyProps) => {
  return (
    <TouchableOpacity onPress={() => onPressKey(text)} style={styles.container}>
      {text === 'DELETE' ? (
        <MaterialCommunityIcons
          name="backspace-outline"
          size={24}
          color="black"
        />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default KeyboardKey

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    margin: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
