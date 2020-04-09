import React from 'react'
import { View, Text } from 'react-native'
import config from '../../config'
const Home = () => {
  return (
    <View>
      <Text>{`Hello world. Here is my ${config.API_KEY}`}</Text>
    </View>
  )
}

export default Home
