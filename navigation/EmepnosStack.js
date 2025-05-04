import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import EmpenoScreen from '../screens/EmpenoScreen'
import EmpenoList from '../screens/EmpenosList'
import Empenos from '../screens/Empenos'

const Stack = createStackNavigator()

export default function EmepnosStack() {

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
              name="Empenos"
              component={Empenos}
              options={{title: "Empeños"}}
          />
          <Stack.Screen
                  name="Empeno"
                  component={EmpenoScreen}
                  options={({ navigation }) => ({
                    title: "Empeños",
                    headerLeft: () => (
                      <Icon
                        type="material-community"
                        name="arrow-left-drop-circle-outline"
                        size={30}
                        color="#000"
                        onPress={() => navigation.goBack()}
                      />
                    ),
                  })}
                />
          <Stack.Screen
                  name="EmpenoList"
                  component={EmpenoList}
                  options={({ navigation }) => ({
                    title: "Historial de empeños",
                    headerLeft: () => (
                      <Icon
                        type="material-community"
                        name="arrow-left-drop-circle-outline"
                        size={30}
                        color="#000"
                        onPress={() => navigation.goBack()}
                      />
                    ),
                  })}
                />
      </Stack.Navigator>
    )
}
