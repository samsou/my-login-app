import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'

const HomeScreen = () => {

    const {userInfo,isLoading,logout} = useContext(AuthContext)


  return (
    <View style={styles.container}>
        <Spinner visible={isLoading}/>
        <Text>Welcome {userInfo.message}</Text>
        <Button title='Logout' color='red' onPress={()=>{logout()}}/>
    </View>
  )
}

export default HomeScreen


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


