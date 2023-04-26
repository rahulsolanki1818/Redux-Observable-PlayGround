import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {},
})

const MyComponent = props => {
  return (
    <View style={styles.container}>
      <Text>My Custom Component</Text>
    </View>
  )
}

export default MyComponent
