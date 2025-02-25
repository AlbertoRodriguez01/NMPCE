import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Products from '../screens/products/Products'


const Stack = createStackNavigator()

export default function ProductsStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen
            name="Products"
            component={Products}
            options={{title: "Productos"}}
        />
    </Stack.Navigator>
  )
}