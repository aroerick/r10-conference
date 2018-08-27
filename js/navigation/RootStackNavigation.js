import { createStackNavigator } from 'react-navigation'
import NavLayout, { SpeakerStack } from './NavigationLayout'

export default createStackNavigator(
  {
    NavLayout,
    SpeakerStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)
