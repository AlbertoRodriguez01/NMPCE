import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Search from '../screens/Search'
import Login from '../screens/account/Login'


const Stack = createStackNavigator()

export default function AccountStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen
            name="Search"
            component={Search}
            options={{title: "Buscar"}}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{title: "Iniciar Sesion"}}
        />
    </Stack.Navigator>
  )
}