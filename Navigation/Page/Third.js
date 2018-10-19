import React, { Component } from 'react'
import { StyleSheet ,View } from 'react-native'
import { Button ,Text } from 'native-base'


export default class app extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <Text>
          This is Third Page.
        </Text>
        <Button
            style = {styles.button}
            block
            onPress = {() => this.props.navigation.navigate('First')}
        >
            <Text>
                First Page
            </Text>
        </Button>
        <Button
            style = {styles.button}
            block
            onPress = {() => this.props.navigation.navigate('Second')}
        >
            <Text>
                Second Page
            </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Container : {
      flex : 1,
      justifyContent : "center",
      alignItems : "center"
    },
    button :{
        margin : 5
    }
})