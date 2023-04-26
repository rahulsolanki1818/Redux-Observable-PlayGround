import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import AppRouter from './router/appRouter'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = props => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App
