import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
          tabBarLabel: 'Produtos',
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: 'Pedidos',
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
}
