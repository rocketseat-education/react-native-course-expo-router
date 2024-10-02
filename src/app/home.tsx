import { Redirect, router, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const { id } = useLocalSearchParams()

  if (!id) {
    return <Redirect href="/" />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home - {id}</Text>

      <TouchableOpacity onPress={router.back}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
