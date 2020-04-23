import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {  MegaSena } from './componentes/MultiplasFuncoes'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Eventos from './componentes/Eventos'
import Evento from './componentes/Eventos'
export default createDrawerNavigator({
    ValidarProps:{
        screen: () => <ValidarProps ano={20} />
    },
    Eventos:{
        screen:() => Evento
    },
    Inverter:{
        screen: () => <Inverter texto = 'Fiquem em Casa!' />
    },
    Plataformas:{
        screen: ()=> <Plataformas />

    },
    Contador:{
        screen: () => <Contador  numeroInicial = {100}/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros = {8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },    
    ParImpar:{
        screen: () => <ParImpar numero = {35} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto = 'Fiquem em casa #StayHome' />
    }
}, { drawerWidth: 300 });


