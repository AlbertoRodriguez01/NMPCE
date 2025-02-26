import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Icon } from "react-native-elements"

export default function LoginForm() {

    return (
        <View style={styles.container}>
            <Input 
                containerStyle={styles.input}
                placeholder='Ingresa tu email.'
                keyboardType='email-address'
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input 
                containerStyle={styles.input}
                placeholder='Ingresa tu contraseña.'
                password={true}
                secureTextEntry={!showPassword}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon type='material-community' name={showPassword ? "eye-off-outline": "eye-outline"} iconStyle={styles.icon} onPress={() => setShowPassword(!showPassword)}/>
                }
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
        backgroundColor: "#36ADFC"
    },
    icon:{
        color:"#c1c1c1"
    }
})