import React from 'react'
import { View, Text } from 'react-native'
import padrao from '../componentes/estilos/padrao'


function ParOuImpar(num){
    // if(num % 2 == 0){
    //     return <Text style={padrao.ex}>Par</Text>
    // }
    // else{
    //     return <Text style={padrao.ex}>Impar</Text>
    // }

    const retorno = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={padrao.ex}>{retorno}</Text>
}


export default (number) => (
    <View>
        <Text> Condicao Ternaria </Text>
        {
            number.numero % 2 == 0 
            ?  <Text style={padrao.ex}>Par</Text>
            : <Text style={padrao.ex}>Impar</Text>
        }
        <Text> Pela Function criada</Text>
        {
            ParOuImpar(number.numero)
        }
    </View>
);