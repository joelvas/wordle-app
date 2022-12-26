import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main'
import CustomTheme from './src/themes/CustomTheme'
import AppBar from './src/components/AppBar'

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={CustomTheme}>
        <StatusBar style="auto" />
        <AppBar />
        <Main />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

