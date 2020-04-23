import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const validaProps = props => (
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>
);

// adicionando uma função para a validaProps para definir os defaults
validaProps.defaultProps = {
    label: 'Ano: '    
}
// adicionando uma propriedade para validar se o parâmetro ano é um número e se ele está preenchido
validaProps.PropTypes = {
    ano: PropTypes.number.isRequired
}
  

export default validaProps;
