import React, { Component } from 'react'
import  { View, Text, TouchableHighlight } from 'react-native'
import padrao from '../componentes/estilos/padrao'

export default class Contador extends Component{

    state ={
        numero:this.props.numeroInicial
    }

    // acessando o construtor da classe para poder manipular o this quando não for utilizado arrow function
    // constructor (props){
    //     super(props)
    //     this.limpar = this.limpar.bind(this)
    // }

    // utlizando arrow function para poder acessar tranquilamente o this
    maisUm = () =>{
        // utilizaremos o SetState para poder manipular de forma correta o estado da varíavel
        // método que foi rrecebido como herana através do Componente
        // this é o objeto que foi criado à partir da classe

        this.setState({ numero: this.state.numero + 1 })
    }

    // funcao normal
    limpar(){
        this.setState({ numero: 0})
    }

    render(){
        return(
            <View>
                <Text style={padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress = {this.maisUm}
                    // transformando a funcao limpar em uma funcao arrow para o this ficar acessível
                    onLongPress = {() => this.limpar()}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}