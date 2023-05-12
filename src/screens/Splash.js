import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'


const Splash = ({ navigation }) => {

  useEffect(()=> {
    setTimeout(() => {
      navigation.replace('Login')
    },2000)
  })
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.logoName}>Abhikart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbe0b',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  logoName: {
    fontSize: 30,
    fontWeight: 600,
    fontFamily: 'Oswald'
  }
})

export default Splash