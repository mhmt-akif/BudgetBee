import { View } from "react-native"
import styles from './styles'
import { AmountCard } from "./components/AmountCard/AmountCard"
import { Colors } from "../../shared/theme/Colors"
import { TransactionsList } from "./components/TransactionsList/TransactionsList"
export const Home=()=>{
    return(
        <View style={styles.container}>
           <AmountCard width="90%" height={120} type="gradient" title="Net Bakiye" amount="22.940" amountColor={Colors.white} amountSize={40}/>
           <AmountCard width="45%" height={100} title="Gelir" amount="12.500" dotColor={Colors.success} amountColor={Colors.success} amountSize={22}/>
           <AmountCard width="45%" height={100} title="Gider" amount="12.500" dotColor={Colors.error} amountColor={Colors.error} amountSize={22}/>
           <TransactionsList amountColor={Colors.success}/>
        </View>
    )
}