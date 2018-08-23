import React from 'react'
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'
import About from '../screens/About'
import Schedule from '../screens/Schedule'
import Session from '../screens/Session'
import Map from '../screens/Map'
import Favs from '../screens/Favs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

const renderIcon = (iconName, tintColor) => {
  return <Ionicons name={iconName} size={25} color={tintColor} />
}
const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule,
    },
    Session: {
      screen: Session,
    }
  },
  {
    navigationOptions:  ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
ScheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor, }) => (
    renderIcon('md-calendar', tintColor)
  )
}
const MapStack = createStackNavigator(
  {
    Map: {
      screen: Map,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
MapStack.navigationOptions = {
  drawerIcon: ({ tintColor, }) => (
    renderIcon('md-map', tintColor)
  )
}
const FavsStack = createStackNavigator(
  {
    Favs: {
      screen: Favs,
    },
    Session: {
      screen: Session,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
FavsStack.navigationOptions = {
  drawerIcon: ({ tintColor, }) => (
    renderIcon('md-heart-empty', tintColor)
  )
}
const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
AboutStack.navigationOptions = {
  drawerIcon: ({ tintColor, }) => (
    renderIcon('md-information-circle-outline', tintColor)
  )
}

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Favs: FavsStack,
    About: AboutStack,
  },
)
