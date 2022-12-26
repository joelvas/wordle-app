import BasicModal from '../../components/ui/basics/BasicModal'
import LottieView from 'lottie-react-native'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'
import FlexContainer from '../../components/ui/flex/FlexContainer'
import { useTheme } from 'react-native-paper'
import { CustomThemeProps } from '../../themes/CustomTheme'

interface Props {
  children?: React.ReactNode
  onPressPlayAgain: () => void
  visible: boolean
  title?: React.ReactNode
}
const WinnerModal = (props: Props) => {
  const { onPressPlayAgain, visible } = props
  const theme = useTheme<CustomThemeProps>()
  const playButtonStyle = {
    borderColor: theme.colors.primary
  }
  const textStyle = {
    color: theme.colors.primary
  }
  return (
    <BasicModal visible={visible} dismissable={false}>
      <FlexContainer
        style={{
          alignItems: 'center',
          marginHorizontal: 5,
          position: 'relative'
        }}
      >
        <LottieView
          source={require('../../../assets/animations/you-win.json')}
          autoPlay
          loop={false}
          style={{ width: 200 }}
        />
        <FlexContainer style={{ position: 'absolute' }}>
          <LottieView
            source={require('../../../assets/animations/confetti.json')}
            autoPlay
            loop={false}
            style={{ width: 350 }}
          />
        </FlexContainer>
        <Text variant="headlineSmall" style={[styles.text, textStyle]}>
          You win! Well done!
        </Text>
        <Button style={[styles.button, playButtonStyle]} onPress={onPressPlayAgain}>
          Play again
        </Button>
      </FlexContainer>
    </BasicModal>
  )
}
export default WinnerModal

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    borderWidth: 1
  },
  text: {
    fontWeight: 'bold'
  }
})
