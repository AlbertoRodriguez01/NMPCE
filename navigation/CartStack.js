import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Cart from '../screens/Cart'

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
            name="Cart"
            component={Cart}
            options={{title: "Carrito"}}
        />
        
    </Stack.Navigator>
  )
}