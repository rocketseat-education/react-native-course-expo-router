import { MaterialIcons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: '#000000',
          drawerInactiveTintColor: '#999999',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Entrar',
            title: 'Entrar',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="sign-up"
          options={{
            drawerLabel: 'Criar conta',
            title: 'Criar conta',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
