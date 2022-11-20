import react, { createContext, useEffect, useState } from "react";
import { config, BASE_URL } from "../config";

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userInfo, setUserInfo]= useState({})

    const [isLoading, setIsLoading]= useState(false)

    const [splashLoding, setSplashLoding]= useState(false)

    const register = (name, email, password) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/login/compte/client`, {
            name, email, password
        }, config
        ).then(res => {

            let userInfo=res.data;

            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false)    

            console.log(userInfo);

        }).catch(e=>{
            console.log(`register error ${e}`);
            setIsLoading(false)
        });
    };

    const login = (telephone, password) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/login/compte/client`, {
            telephone, password
        }, config
        ).then(res => {

            let userInfo=res.data;

            setUserInfo(userInfo);

            console.log(userInfo);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false)    

            

        }).catch(e=>{
            console.log(`login error ${e}`);
            setIsLoading(false)    
        });
    };


    const logout =  () => {
        setIsLoading(true)
        try {            
            AsyncStorage.removeItem('userInfo');
            setUserInfo({})
            setIsLoading(false)
            console.log(`You loged out`);
        } catch (error) {
            console.log(`logout error ${e}`);
            setIsLoading(false)  
        }
    };

    const isLoggedIn  = async  () => {
        try {
            setSplashLoding(true)
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if(userInfo){
                setUserInfo(userInfo)
            }
            setSplashLoding(false)
        } catch (e) {
            setSplashLoding(false)
            console.log(`is login in error ${e}`);
        }
    }   


useEffect(()=> {
    isLoggedIn()
},[]); 


    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            register,
            login,
            logout,
            splashLoding
        }}>{children}</AuthContext.Provider>  
    );
    

}