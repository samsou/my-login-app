import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native-web'

const SplashScreen = () => {


  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:'#06bcee'}}>
        <ActivityIndicator size = 'large' color='#ffffff'/>                    
    </View>
  )
}

export default SplashScreen


const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',   
    },

    wrapper:{
        with:'80%'
    },
    input:{
        marginBottom: 12,
        borderBottomWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
    },
    link:{
        color:'blue',
    } 
}
)


