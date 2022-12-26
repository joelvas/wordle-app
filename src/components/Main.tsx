import React from 'react'
import { View, StyleSheet } from 'react-native'
import GameScreen from '../screens/GameScreen'
import Notifications from '../sections/Notifications'

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <GameScreen />
      </View>
      <Notifications />
    </View>
  )
}
export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
