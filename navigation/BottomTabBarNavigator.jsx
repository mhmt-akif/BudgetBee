import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../features/Home/Home';
import { Transactions } from '../features/Transactions/Transactions';
import { Settings } from '../features/Settings/Settings';   
const Tab=createBottomTabNavigator();
export const BottomNavigator=()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown:false,
                tabBarActiveTintColor: '#4F46E5',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{title: 'Ana Sayfa'}} />
            <Tab.Screen name="Transactions" component={Transactions} options={{title: 'İşlemler'}} />
            <Tab.Screen name="Settings" component={Settings} options={{title: 'Ayarlar'}} />
        </Tab.Navigator>
    )
}