import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  const { opacity, fadeIn, fadeOut, position, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={
        {
          ...styles.purpleBox,
          opacity: opacity,
          transform: [{
            translateY: position,
          }]
        }} />
      <View style={{ marginTop: 10 }}>
        <Button title='FadeIn' onPress={() => {
          fadeIn();
          startMoving(-200)
        }} />
        <View style={{ marginTop: 10 }} />
        <Button color='purple' title='FadeOut' onPress={fadeOut} />

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150
  },

});
