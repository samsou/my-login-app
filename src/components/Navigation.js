import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {


    const {userInfo,splashLoding} =  useContext(AuthContext)   

    console.log(userInfo)


  return (
   
    <NavigationContainer>
        <Stack.Navigator>
            {splashLoding ?  <Stack.Screen name="Splash Screen" component={SplashScreen} 
                    options={{headerShown:false}}
                    />
            :(userInfo && userInfo.success ? (
                <Stack.Screen name="Home" component={HomeScreen} 
                options={{headerShown:false}}
                />  

            ):(
                <>
                    <Stack.Screen name="Login" component={LoginScreen} 
                    options={{headerShown:false}}
                    />

                    <Stack.Screen name="Register" component={RegisterScreen} 
                    options={{headerShown:false}}
                    />
                </>
            )                 
            )}
            
        </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default Navigation