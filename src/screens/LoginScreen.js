import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'


const LoginScreen = ({navigation}) => {
    const [telephone, setTelephone]= useState('')
    const [password, setPassword]= useState('')
    const {isLoading,login} = useContext(AuthContext)



  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Spinner visible={isLoading}/>
            <TextInput style={styles.input} 
            value={telephone}
            placeholder="Enter email" 
            onChangeText={text=>setTelephone(text)}
             />

            <TextInput style={styles.input} 
                placeholder="Enter password"
                value={password}
              secureTextEntry  
              onChangeText={text=>setPassword(text)}
              />

            <Button title='Login'  onPress={()=>{login(telephone,password)}}  />

            <View style={{flexDirection:'row', marginTop:20}}>
                <Text > Don't have an account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
                    <Text style={styles.link} > Register </Text>
                </TouchableOpacity>
            </View>  


        </View>  

    </View>
  )
}



export default LoginScreen



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


