import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Notification from '../screens/notification'
import Details from '../screens/details'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Notifications" component={Notification} />
    </Stack.Navigator>
  )
}

const AppRouter = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default AppRouter
