import BasicModal from '../../components/ui/basics/BasicModal'
import LottieView from 'lottie-react-native'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'
import FlexContainer from '../../components/ui/flex/FlexContainer'
import { useTheme } from 'react-native-paper'
import { CustomThemeProps } from '../../themes/CustomTheme'

interface Props {
  word: string
  children?: React.ReactNode
  onPressPlayAgain: () => void
  visible: boolean
  title?: React.ReactNode
}
const LooserModal = (props: Props) => {
  const { onPressPlayAgain, visible, word } = props
  const theme = useTheme<CustomThemeProps>()
  const playButtonStyle = {
    borderColor: theme.colors.primary
  }
  const textStyle = {
    color: theme.colors.info
  }
  return (
    <BasicModal visible={visible} dismissable={false}>
      <FlexContainer style={{ alignItems: 'center', marginHorizontal: 5 }}>
        <LottieView
          source={require('../../../assets/animations/you-loose.json')}
          autoPlay
          loop={true}
          resizeMode="contain"
          autoSize
          style={{ width: 200 }}
        />
        <Text variant="headlineSmall" style={[styles.text, textStyle]}>
          {`You loose... :(`}
        </Text>
        <Text variant="bodyMedium" style={[styles.text, textStyle]}>
          {`The answer was: ${word.toUpperCase()}`}
        </Text>
        <Button
          style={[styles.button, playButtonStyle]}
          onPress={onPressPlayAgain}
        >
          Play again
        </Button>
      </FlexContainer>
    </BasicModal>
  )
}
export default LooserModal

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    borderWidth: 1
  },
  text: {
    fontWeight: 'bold'
  }
})
