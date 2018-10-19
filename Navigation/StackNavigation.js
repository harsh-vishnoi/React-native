import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import FirstScreen from './Page/First'
import SecondScreen from './Page/Second'
import ThirdScreen from './Page/Third'

export default class Stack extends Component{
    render(){
        return(
            <Navigate/>
        );
    }
}

const Navigate = StackNavigator({
    First : FirstScreen,
    Second : SecondScreen,
    Third : ThirdScreen
});