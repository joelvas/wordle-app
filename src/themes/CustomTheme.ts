import { DefaultTheme } from 'react-native-paper'

const CustomTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#79b851',
    secondary: '#a1b2c3',
    error: '#F72E2E',
    success: '#22C66A',
    warning: '#f1c40f',
    info: '#24AFEC',
    white: '#FFFFFF'
  }
}

export type CustomThemeProps = typeof CustomTheme

export default CustomTheme
