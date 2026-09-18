import { TextInput, View ,Text, TouchableOpacity} from "react-native"
import styles from "./styles"
import { useState } from "react"
import { Dropdown } from "../Dropdown/Dropdown"
export const AddCategory=({onAdd})=>{
    const [value,setValue]=useState("")
    const [categoryType, setCategoryType] = useState("Gider")

    const handleAdd=()=>{
        const name=value.trim()
        if(!name) return
        onAdd?.(categoryType,name)
        setValue("")
    }

    return(
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Yeni kategori adı"
                    value={value}
                    onChangeText={setValue}
                    style={styles.input}
                    placeholderTextColor={"#5a6472"}
                    onSubmitEditing={handleAdd}
                />
            </View>
            <Dropdown value={categoryType} onSelect={setCategoryType}/>
            <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
                <Text style={styles.btnTxt}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}