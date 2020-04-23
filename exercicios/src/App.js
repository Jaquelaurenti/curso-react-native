import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {  MegaSena } from './componentes/MultiplasFuncoes'


export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Simples texto = 'Fique em Casa #StayHome!!!' />
                <ParImpar numero = {33} />
                <Inverter texto = 'Fique em casa' />
                <MegaSena numeros = {9} />

            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     texto01:{
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff5858',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DA55'
    }
})