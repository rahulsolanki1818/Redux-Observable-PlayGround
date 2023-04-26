import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

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

const todoSelector = state => state.todo

const statusSelector = createSelector(todoSelector, todo => ({
  ...todo.status,
}))

const Details = props => {
  const dispatch = useDispatch()
  const state = useSelector(statusSelector)

  console.log('render', state)

  const onPress = () => {
    dispatch({ type: 'TOGGLE_ERROR', payload: { error: true } })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>press me</Text>
      </TouchableOpacity>
      <Text>details</Text>
    </View>
  )
}

export default Details
