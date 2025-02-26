import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Cart from '../screens/Cart'


const Stack = createStackNavigator()

export default function AccountStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen
            name="Cart"
            component={Cart}
            options={{title: "Carrito"}}
        />
        
    </Stack.Navigator>
  )
}