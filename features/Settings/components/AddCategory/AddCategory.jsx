import { TextInput, View ,Text, TouchableOpacity} from "react-native"
import styles from "./styles"
import { useState } from "react"
import { Dropdown } from "../Dropdown/Dropdown"
export const AddCategory=()=>{
    const [value,setValue]=useState("")
    const [categoryType, setCategoryType] = useState("Gider")
    return(
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Yeni kategori adı"
                    value={value}
                    onChangeText={setValue}
                    style={styles.input}
                    placeholderTextColor={"#5a6472"}
                />
            </View>
            <Dropdown value={categoryType} onSelect={setCategoryType}/>
            <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.btnTxt}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}