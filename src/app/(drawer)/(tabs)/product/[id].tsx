import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
