import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <TouchableOpacity onPress={() => router.navigate('/product/52')}>
        <Text>Abrir produto</Text>
      </TouchableOpacity>
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
