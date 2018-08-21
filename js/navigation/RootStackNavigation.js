import { createStackNavigator } from 'react-navigation'
import NavLayout from './NavigationLayout'

export default createStackNavigator(
  {
    NavLayout,
  },
  {
    headerMode: 'none',
  }
)
