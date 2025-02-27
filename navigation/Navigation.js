import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from 'react-native-elements'

import AccountStack from './AccountStack'
import ProductsStack from './ProductsStack'
import CartStack from './CartStack'



const Tab = createBottomTabNavigator()

export default function Navigation(){

    const screenOptions = (route, color) => {
        let iconName
        switch(route.name){
            case "Productos":
                iconName = "view-carousel"
                break;
            case "Carrito":
                iconName = "cart-variant"
                break;
            case "Buscar":
                iconName = "magnify"
                break;
            case "Cuenta":
                iconName = "account"
                break;
        }

        return (
            <Icon
                type='material-community'
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
          <Tab.Navigator 
              initialRouteName='Productos'
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ color }) => screenOptions(route, color),
                  inactiveTintColor: "#377d07",
                  activeTintColor: "#377d07"
              })}
          >
              <Tab.Screen
                  name="Productos"
                  component={ProductsStack}
                  options={{title: "Productos", headerShown:false}}
              />
              <Tab.Screen
                  name="Cuenta"
                  component={AccountStack}
                  options={{title: "Cuenta", headerShown:false}}
              />
              <Tab.Screen
                  name="Carrito"
                  component={CartStack}
                  options={{title: "Carrito", headerShown:false}}
              />
          </Tab.Navigator>
        </NavigationContainer>
      )

}