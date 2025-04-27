import React from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"

export default function RegisterForm() {

    const navigation = useNavigation()

    return (
        <View style={styles.form}>
          <Input 
            containerStyle={styles.input}
            placeholder='Ingresa tu email...'
            keyboardType='email-address'
          />
          <Input 
            containerStyle={styles.input}
            placeholder='Nombre...'
          />
          <Input 
            containerStyle={styles.input}
            placeholder='Ingresa tu contraseña...'
            password={true}
          />
          <Input 
            containerStyle={styles.input}
            placeholder='Confirma tu contraseña...'
            password={true}
            
          />
          <Button
            title="Registrar Nuevo Usuario"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    form:{
        marginTop: 30,
    },
    input:{
        width:"100%"
    },
    btnContainer:{
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn:{
        backgroundColor: "#377d07"
    },
    icon:{
        color:"#c1c1c1"
    }
})