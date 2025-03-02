import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'

import AccountStack from './AccountStack'
import ProductsStack from './ProductsStack'
import CartStack from './CartStack'


const Drawer = createDrawerNavigator();


export default function Navigation(){

    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Productos"
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        drawerIcon: ({ color, size }) => {
                            let iconName;
                            switch (route.name) {
                                case "Productos":
                                    iconName = "collage";
                                    break;
                                case "Empeno":
                                    iconName = "hand-coin";
                                    break;
                                case "Subastas":
                                    iconName = "hand-front-right";
                                    break;
                                case "Configuracion":
                                    iconName = "cog-outline";
                                    break;
                                case "Carrito":
                                    iconName = "cart-variant";
                                    break;
                                case "Cuenta":
                                    iconName = "account";
                                    break;
                            }
                            return <Icon type='material-community' name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    <Drawer.Screen 
                        name="Productos" 
                        component={ProductsStack} 
                        options={{ title: "Productos en venta" }}
                    />
                    <Drawer.Screen 
                        name="Carrito" 
                        component={CartStack} 
                        options={{ title: "Ver Carrito" }}
                    />
                    <Drawer.Screen 
                        name="Cuenta" 
                        component={AccountStack} 
                        options={{ title: "Cuenta" }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}