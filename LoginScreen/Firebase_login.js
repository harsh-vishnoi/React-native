import React ,{ Component } from 'react'
import { TextInput , TouchableOpacity } from 'react-native'
import { Text, View } from 'native-base'
import * as Animatable from 'react-native-animatable'
import * as firebase from 'firebase'

export default class Login extends Component{

    state = {
        email : '',
        password : '',
    }

    componentWillMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBeKvF8SoCa5erTETgkBU_REBCZOzxgwaw",
                authDomain: "vikavi-01.firebaseapp.com",
                databaseURL: "https://vikavi-01.firebaseio.com",
                projectId: "vikavi-01",
                storageBucket: "vikavi-01.appspot.com",
                messagingSenderId: "960925598365"
              });
        }
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                () => {alert('Signed In')}
            )
        }
        catch (error) {
            console.log(error.toString())
        }
    }


    createUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                () => {alert('User Created')}
            )
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <Animatable.View
                        animation = "zoomIn"
                        style = {{
                            flex : 1,
                            alignItems : "center",
                            justifyContent : "center"
                        }}
                    >
                        <Text
                            style = {{
                                fontWeight : "400",
                                fontSize : 35
                            }} 
                        >Welcome
                        </Text>
                    </Animatable.View>
                    <View
                        style = {{
                            flex : 1,
                            alignItems : "center",
                            justifyContent : "center"
                        }}
                    >
                        <Animatable.View
                            animation = "slideInLeft"
                        >
                            <TextInput
                                style = {{
                                    fontSize : 23
                                }} 
                                keyboardType = "email-address"
                                value = {this.state.email}
                                onChangeText = {(value) => this.setState({email : value})}
                                placeholder = "Enter your E-mail"
                            />
                        </Animatable.View>
                        
                        <Animatable.View
                            animation = "slideInRight"
                        >
                            <TextInput
                                style = {{
                                    fontSize : 23
                                }} 
                                secureTextEntry = {true}
                                value = {this.state.password}
                                onChangeText = {(value) => this.setState({password : value})}
                                placeholder = "Enter your Password"
                            />
                        </Animatable.View>
                    </View>
                    <View 
                        style = {{
                                flex : 1,
                                flexDirection : 'row',
                                alignItems : "center",
                                justifyContent : "center"
                            }}
                    >
                        <Animatable.View
                            animation = "slideInLeft"
                        >
                            <TouchableOpacity
                               onPress = {() => this.loginUser(this.state.email, this.state.password)}
                            >
                                <Text style = {{
                                        fontSize : 25,
                                        marginHorizontal : 10
                                    }} 
                                >Sign In
                                </Text>
                            </TouchableOpacity>
                        </Animatable.View>

                        <Animatable.View
                            animation = "slideInRight"
                        >
                            <TouchableOpacity                        
                                onPress = {() => this.createUser(this.state.email, this.state.password)}
                            >
                                <Text style = {{
                                        fontSize : 25,
                                        marginHorizontal : 10
                                    }} 
                                >Sign Up
                                </Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
            </View>
        );
    }
}
