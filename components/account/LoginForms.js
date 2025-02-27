import React, { useState } from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native'
import { Input, Button, Icon } from "react-native-elements"

export default function LoginForm() {

    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text>{isAdmin ? "Admin" : "Usuario"}</Text>
                <Switch 
                    value={isAdmin} 
                    onValueChange={(value) => setIsAdmin(value)}
                />
            </View>
            <Input 
                containerStyle={styles.input}
                placeholder='Ingresa tu email.'
                keyboardType='email-address'
            />
            <Input 
                containerStyle={styles.input}
                placeholder='Ingresa tu contraseña.'
                password={true}
            />
            <Button
            title="Iniciar Sesion"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
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