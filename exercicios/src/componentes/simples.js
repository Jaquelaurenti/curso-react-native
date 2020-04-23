import React from 'react'
import { Text } from 'react-native'
import padrao from '../componentes/estilos/padrao'
import { styles } from '../App'

// componente baseado em funcao
// caso seja um componente funcional, por convencao o ideal é usar o parametro props


// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

// transformand em arrow function
export default (props) => <Text style={[padrao.ex]}>{props.texto} </Text>
