import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export const CategoryChip=({label,onRemove})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.labelText}>{label}</Text>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnTxt} onPress={onRemove}>X</Text>
            </TouchableOpacity>
        </View>
    )
}