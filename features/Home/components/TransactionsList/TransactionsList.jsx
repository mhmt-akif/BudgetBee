import { View,Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { Colors } from "../../../../shared/theme/Colors"

export const TransactionsList=({transactions=[]})=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{color:Colors.white,fontSize:17,fontWeight:"bold"}} >Son İşlemler</Text>
                <TouchableOpacity>
                    <Text style={{color:"#5482ef"}}>Tümü</Text>
                </TouchableOpacity>
            </View>

            {transactions.map((transaction,index)=>{
                const isIncome=transaction.type==="income"
                const amountColor=isIncome ? Colors.success : Colors.error
                const avatarBg=isIncome ? "#123a24" : "#49150f"
                const letterColor=isIncome ? "#4ade80" : "#ff7b66"
                const isLast=index===transactions.length-1

                return(
                    <View key={transaction.id} style={[styles.content, isLast && styles.contentLast]}>
                        <View style={[styles.image,{backgroundColor:avatarBg}]}>
                            <Text style={{color:letterColor,fontSize:20,}}>{transaction.label[0]}</Text>
                        </View>
                        <View style={styles.event}>
                            <Text numberOfLines={1} style={{color:Colors.white, fontSize:15,fontWeight:"bold",}}>{transaction.label}</Text>
                            <Text numberOfLines={1} style={{color:"#4c6069",fontWeight:"500"}}>{transaction.date}</Text>
                        </View>
                        <View style={styles.amount}>
                            <Text numberOfLines={1} style={{color:amountColor,fontSize:16,fontWeight:"bold"}}>{isIncome ? "+" : "-"}₺{transaction.amount}</Text>
                        </View>
                    </View>
                )
            })}

        </View>
    )
}