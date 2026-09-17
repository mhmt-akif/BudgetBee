import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { Colors } from "../../../../shared/theme/Colors"

export const TransactionsList=({amountColor})=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{color:Colors.white,fontSize:17,fontWeight:"bold"}} >Son İşlemler</Text>
                <TouchableOpacity>
                    <Text style={{color:"#5482ef"}}>Tümü</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.image}>
                    <Text style={{color:"#ff7b66",fontSize:20,}}>M</Text>
                </View>
                <View style={styles.event}>
                    <Text style={{color:Colors.white, fontSize:15,fontWeight:"bold",}}>Market</Text>
                    <Text style={{color:"#4c6069",fontWeight:"500"}}>14 Eylül</Text>
                </View>
                <View style={styles.amount}>
                    <Text style={{color:amountColor,fontSize:18,fontWeight:"bold"}}>₺60400</Text>
                </View>
            </View>
            

        </View>
    )
}