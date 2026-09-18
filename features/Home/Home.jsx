import { View, Text, ScrollView } from "react-native"
import styles from './styles'
import { AmountCard } from "./components/AmountCard/AmountCard"
import { Colors } from "../../shared/theme/Colors"
import { TransactionsList } from "./components/TransactionsList/TransactionsList"

const transactions=[
    { id:1, label:"Market", date:"14 Eyl", amount:"640", type:"expense" },
    { id:2, label:"Maaş", date:"12 Eyl", amount:"32.000", type:"income" },
    { id:3, label:"Ulaşım", date:"11 Eyl", amount:"180", type:"expense" },
    { id:4, label:"Eğlence", date:"9 Eyl", amount:"350", type:"expense" },
]

export const Home=()=>{
    return(
        <ScrollView style={styles.screen} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.dateLabel}>Eylül 2026</Text>
                <Text style={styles.greeting}>Merhaba 👋</Text>
            </View>

            <AmountCard width="90%" height={120} type="gradient" title="Net Bakiye" amount="22.940" amountColor={Colors.white} amountSize={40}/>

            <View style={styles.amountRow}>
                <AmountCard width="45%" height={100} title="Gelir" amount="34.500" dotColor={Colors.success} amountColor={Colors.success} amountSize={22}/>
                <AmountCard width="45%" height={100} title="Gider" amount="11.560" dotColor={Colors.error} amountColor={Colors.error} amountSize={22}/>
            </View>

            <View style={styles.alert}>
                <View style={styles.alertIcon}>
                    <Text style={styles.alertIconText}>!</Text>
                </View>
                <View style={styles.alertText}>
                    <Text style={styles.alertTitle}>Elektrik Faturası yaklaşıyor</Text>
                    <Text style={styles.alertSubtitle}>2 gün kaldı</Text>
                </View>
                <Text style={styles.alertAmount}>₺890</Text>
            </View>

            <TransactionsList transactions={transactions}/>
        </ScrollView>
    )
}