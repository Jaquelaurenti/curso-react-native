import React, { Component } from 'react'
import { View, Text, TextInput  } from 'react-native'
import padrao from './estilos/padrao'

export default class Evento extends Component{
    state ={
        texto: 'JAQUELINE D CARVALHO LAUIRENTI'
    }

    alterarTexto = props =>{
        this.setState({ props });
    }

    render(){
        return(
            <View>
                <Text style={padrao.font40}>{this.state.texto}</Text>
                <TextInput style={padrao.fontInput}
                    value = {this.state.texto}
                    onChangeText = {this.alterarTexto}> 
                </TextInput> 
            </View>
        );
    }
}