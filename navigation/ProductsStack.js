import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Products from '../screens/products/Products'
import Producto from '../screens/products/Producto'


const Stack = createStackNavigator()

export default function ProductsStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen
            name="Products"
            component={Products}
            options={{title: "Productos"}}
        />
        <Stack.Screen
            name="Producto"
            component={Producto}
            options={{title: "Producto"}}
        />
    </Stack.Navigator>
  )
}