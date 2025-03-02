import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/account/Account'
import Login from '../screens/account/Login'
import Register from '../screens/account/Register'

import { Icon } from 'react-native-elements'
import { DrawerActions, useNavigation } from '@react-navigation/native'


const Stack = createStackNavigator()

export default function AccountStack() {

  const navigation = useNavigation()

  return(
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return(
            <Icon
              name='menu'
              size={30}
              color='#000'
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          )
        }
      }}
    >
        <Stack.Screen
            name="Account"
            component={Account}
            options={{title: "Cuenta"}}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{title: "Iniciar Sesion"}}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{title: "Registrar Usuario"}}
        />
    </Stack.Navigator>
  )
}