import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/sign-up" style={styles.new}>
        Criar conta
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  new: { fontSize: 16, fontWeight: 'bold' },
})
