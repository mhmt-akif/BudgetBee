import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from "@expo/vector-icons/Ionicons"
import { NewTransactionModal } from "../features/Transactions/components/NewTransactionModal/NewTransactionModal"
import styles from "./BottomTabBar.styles"

const ICONS={
    Home:"home",
    Transactions:"card",
    Reports:"bar-chart",
    Settings:"settings",
}

const ACTIVE_COLOR="#6C63FF"
const INACTIVE_COLOR="#6b7280"

export const BottomTabBar=({state,descriptors,navigation})=>{
    const [isModalVisible,setIsModalVisible]=useState(false)
    const leftRoutes=state.routes.slice(0,2)
    const rightRoutes=state.routes.slice(2)

    const renderTab=(route,index)=>{
        const {options}=descriptors[route.key]
        const label=options.title ?? route.name
        const isFocused=state.index===index
        const color=isFocused ? ACTIVE_COLOR : INACTIVE_COLOR

        const onPress=()=>{
            const event=navigation.emit({
                type:"tabPress",
                target:route.key,
                canPreventDefault:true,
            })

            if(!isFocused && !event.defaultPrevented){
                navigation.navigate(route.name)
            }
        }

        return(
            <TouchableOpacity key={route.key} style={styles.tab} onPress={onPress} activeOpacity={0.7}>
                <Ionicons name={ICONS[route.name]} size={22} color={color}/>
                <Text style={[styles.label,{color}]}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.bar}>
                {leftRoutes.map((route,index)=>renderTab(route,index))}

                <View style={styles.fabSpacer}/>

                {rightRoutes.map((route,index)=>renderTab(route,index+2))}
            </View>

            <TouchableOpacity style={styles.fabWrapper} activeOpacity={0.85} onPress={()=>setIsModalVisible(true)}>
                <LinearGradient
                    colors={["#8b7cf6","#4f46e5"]}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={styles.fab}
                >
                    <Ionicons name="add" size={28} color="white"/>
                </LinearGradient>
            </TouchableOpacity>

            <NewTransactionModal visible={isModalVisible} onClose={()=>setIsModalVisible(false)}/>
        </View>
    )
}
