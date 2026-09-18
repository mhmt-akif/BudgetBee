import { View, Text } from "react-native"
import styles from './styles'
import { PaymentCard } from "./components/PaymentCard/PaymentCard"

const payments=[
    { id:1, day:17, month:"EYL", title:"Elektrik Faturası", daysLeft:2, amount:"890" },
    { id:2, day:18, month:"EYL", title:"Netflix Aboneliği", daysLeft:3, amount:"149" },
    { id:3, day:20, month:"EYL", title:"Kira", daysLeft:5, amount:"9.500" },
    { id:4, day:25, month:"EYL", title:"İnternet Faturası", daysLeft:10, amount:"320" },
    { id:5, day:2, month:"EKİ", title:"Su Faturası", daysLeft:17, amount:"210" },
]

export const Transactions=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Yaklaşan Ödemeler</Text>
                <Text style={styles.subtitle}>Düzenli ödemelerin ve son tarihleri</Text>
            </View>

            <View style={styles.list}>
                {payments.map(payment=>(
                    <PaymentCard key={payment.id} {...payment}/>
                ))}
            </View>
        </View>
    )
}