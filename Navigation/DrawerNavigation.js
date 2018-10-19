import React, { Component } from 'react'
import  { DrawerNavigator } from 'react-navigation'

import FirstScreen from './Page/First'
import SecondScreen from './Page/Second'
import ThirdScreen from './Page/Third'

export default class Drawer extends Component{
    render(){
        return (
            <DrawerExample />
        );
    }
}

const DrawerExample = DrawerNavigator({
    First : FirstScreen,
    Second : SecondScreen,
    Third : ThirdScreen
})