import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'

const RegisterScreen = ({navigation}) => {

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const {isLoading,register} = useContext(AuthContext)


  return (
    <View style={styles.container}>
        <Spinner visible={isLoading}/>
        <View style={styles.wrapper}>

            <TextInput style={styles.input} 
                value={name}
                placeholder="Enter name" 
                onChangeText={text=>setName(text)}
            />
        
            <TextInput style={styles.input} 
            value={email}
            placeholder="Enter email" 
            onChangeText={text=>setEmail(text)}
             />

            <TextInput style={styles.input} 
                placeholder="Enter password"
                value={password}
              secureTextEntry  
              onChangeText={text=>setPassword(text)}
              />

            <Button title='Register' onPress={()=>{register(name, email,password)}}/>

            <View style={{flexDirection:'row', marginTop:20}}>
                <Text > Have an account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                    <Text style={styles.link} > Login </Text>
                </TouchableOpacity>
            </View>  


        </View>  

    </View>
  )
}



export default RegisterScreen



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


