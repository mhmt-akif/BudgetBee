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
    return(
        <View style={styles.container}>
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

            <AddCategory/>
        </View>
    )
}