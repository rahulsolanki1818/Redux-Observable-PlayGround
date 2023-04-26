import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    color: 'white',
  },
})

const MyComponent = React.lazy(() => import('../components/MyComponent'))

const Home = props => {
  const navigation = useNavigation()
  const navigateToDetails = useCallback(() => {
    // console.log('navigateToDetails')
    navigation.navigate('Details')
    // loading.current = !loading.current
    // dispatch({ type: 'MARK_COMPLETED', payload: loading.current })
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToDetails}>
        <Text>Navigate To Details</Text>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <MyComponent />
        </React.Suspense>
      </TouchableOpacity>
    </View>
  )
}

export default Home
