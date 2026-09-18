import { useState } from "react"
import { View, Text } from "react-native"
import styles from './styles'
import { CategoryChip } from "./components/CategoryChip/CategoryChip"
import { AddCategory } from "./components/AddCategory/AddCategory"
export const Settings=()=>{

const [categories,setCategories]=useState({
    Gider:["Kira","Ev"],
    Gelir:[],
})

const removeCategory=(type,name)=>{
    setCategories(prev=>({
        ...prev,
        [type]:prev[type].filter(c=>c!==name),
    }))
}

const addCategory=(type,name)=>{
    setCategories(prev=>{
        if(prev[type].includes(name)) return prev
        return {
            ...prev,
            [type]:[...prev[type],name],
        }
    })
}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ayarlar</Text>

            <Text style={styles.sectionTitle}>Gider Kategorileri</Text>
            <View style={styles.chipRow}>
                {categories.Gider.map(name => (
                    <CategoryChip
                        key={name}
                        label={name}
                        onRemove={() => removeCategory("Gider", name)}
                    />
                ))}
            </View>

            <Text style={styles.sectionTitle}>Gelir Kategorileri</Text>
            <View style={styles.chipRow}>
                {categories.Gelir.map(name => (
                    <CategoryChip
                        key={name}
                        label={name}
                        onRemove={() => removeCategory("Gelir", name)}
                    />
                ))}
            </View>

            <AddCategory onAdd={addCategory}/>

            <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Tema</Text>
                <Text style={styles.settingValue}>Koyu</Text>
            </View>
        </View>
    )
}