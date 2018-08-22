import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import About from '../screens/About'
import Schedule from '../screens/Schedule'
import Session from '../screens/Session'
import Map from '../screens/Map'
import Favs from '../screens/Favs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

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
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
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
const FavsStack = createStackNavigator(
  {
    Favs: {
      screen: Favs,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  }
)
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

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Favs: FavsStack,
    About: AboutStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName = 'warning'
        if (routeName === 'Schedule') iconName = `ios-calendar`
        if (routeName === 'Map') iconName = `ios-map`
        if (routeName === 'Favs') iconName = `ios-heart`
        if (routeName === 'About') iconName = `ios-information-circle`

        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat-Light',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  }
)
