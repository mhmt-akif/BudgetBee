import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../features/Home/Home';
import { Transactions } from '../features/Transactions/Transactions';
import { Reports } from '../features/Reports/Reports';
import { Settings } from '../features/Settings/Settings';
import { BottomTabBar } from './BottomTabBar';
import { Colors } from '../shared/theme/Colors';
const Tab=createBottomTabNavigator();
export const BottomNavigator=()=>{
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                sceneStyle:{backgroundColor:Colors.background},
            }}
            tabBar={props => <BottomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} options={{title: 'Ana Sayfa'}} />
            <Tab.Screen name="Transactions" component={Transactions} options={{title: 'Ödemeler'}} />
            <Tab.Screen name="Reports" component={Reports} options={{title: 'Raporlar'}} />
            <Tab.Screen name="Settings" component={Settings} options={{title: 'Ayarlar'}} />
        </Tab.Navigator>
    )
}