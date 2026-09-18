import { View,Text } from "react-native"
import styles from "./styles"

export const PaymentCard=({day,month,title,daysLeft,amount})=>{

    const yaklasik=daysLeft<=3

    return(
        <View style={[styles.container, yaklasik && styles.containerWarning]}>
            <View style={styles.dateContainer}>

                <View style={[styles.date, yaklasik && styles.dateWarning]}>
                    <Text style={{fontWeight:"bold",color:yaklasik ? "#fd7f4e" : "white",fontSize:21}}>{day}</Text>
                    <Text style={{color:yaklasik ? "#f16c3b" : "#8b93a1",fontWeight:"500"}}>{month}</Text>
                </View>

            </View>
            <View style={styles.textContainer}>
                <Text style={{fontWeight:"bold",color:"white",fontSize:17}}>{title}</Text>
                    <Text style={{color:yaklasik ? "#f16c3b" : "#8b93a1",fontWeight:"400",fontSize:14}}>{daysLeft} gün kaldı</Text>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={{fontWeight:"bold",color:"white",fontSize:15,fontFamily:'Sora_700Bold',}}>₺{amount}</Text>
            </View>
        </View>
    )
}
