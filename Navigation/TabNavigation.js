import React, { Component } from 'react'
import  { createTabNavigator } from 'react-navigation'

import FirstScreen from './Page/First'
import SecondScreen from './Page/Second'
import ThirdScreen from './Page/Third'

export default class Tab extends Component{
    render(){
        return (
            <TabNavigate />
        );
    }
}

const TabNavigate = createTabNavigator({
    First : FirstScreen,
    Second : SecondScreen,
    Third : ThirdScreen
})