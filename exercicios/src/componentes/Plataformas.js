import React from 'react'
import { Button, Alert, ToastAndroid, Platform, StyleSheet } from 'react-native'

export default props =>{
    const notificar = msg =>{
        if(Platform === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG);
        }
        else{
            Alert.show('Informacao', msg);
        }
    }

    return (
        <Button 
        styles={styles.Button} 
        title= 'Plataforma?' 
         onPress ={() => notificar('Parabéns!!')} />
    );
}


const styles = StyleSheet.create({
    Button:{
        height:42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    ButtonText:{
        fontSize: 15,
        color: "#DA5544",
        fontWeight: "bold"
    }
})