import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 70, backgroundColor: '#000' }} />

      <Slot />

      <View style={{ width: '100%', height: 50, backgroundColor: '#C3C3C3' }} />
    </View>
  )
}
