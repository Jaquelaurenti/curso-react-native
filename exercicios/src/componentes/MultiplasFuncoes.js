import React from 'react'
import { Text } from 'react-native'
import padrao from '../componentes/estilos/padrao'

export const Inverter = props =>{
    const inv = props.texto.split('').reverse().join('');

    return <Text style={padrao.ex}>{inv}</Text>
}

export const MegaSena = props =>{
    const [min, max] = [1,60]
    const numeros = Array(props.numeros || 6).fill(0) // quando numeros eu quero gerar de acordo com o parãmetro que foi passado

    for(let i = 0; i < numeros.length ; i++){
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1) - min);
        }
        numeros[i] = novo;
    }

    numeros.sort((a,b) => a-b); // ordena os valores em ordem crescente
    return <Text style={padrao.ex}>{numeros.join(', ')}</Text>
}


export default Inverter // desta forma o inverter podera ser chamado por fora das demais funções que existem nesse arquivo, exemplo: import Inverter { MegaSena } from '...'

// podemos utilizar também da seguinte maneira:
// retirar os export de todas as const criadas 
// e exportá-los no final do arquivo assim:
// export { Inverter, MegaSena }
