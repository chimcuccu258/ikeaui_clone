import { View, Text } from 'react-native'
import React from 'react'

export default function HomeOffice({route}) {

  const { data } = route.params

  return (
    <View>
      <Text>HomeOffice</Text>
      <Text>{data.toString()}</Text>
    </View>
  )
}