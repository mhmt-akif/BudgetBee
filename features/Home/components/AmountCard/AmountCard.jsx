import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from './styles'
import { Colors } from "../../../../shared/theme/Colors"

export const AmountCard=({ width, height, type, title="Net Bakiye", amount, dotColor=Colors.success , amountColor,amountSize})=>{
    const content = (
        <View style={styles.content}>
            <View style={styles.title}>
                {type!=="gradient" &&
                 <View style={[styles.dot, { backgroundColor: dotColor }]}></View>
                }

                <Text style={styles.titleText}>{title}</Text>
            </View>

            <View style={styles.amount}>
                <Text style={[styles.amountText,{color:amountColor,fontSize:amountSize}]}>₺{amount}</Text>
            </View>
        </View>
    );

    if (type === "gradient") {
        return (
            <LinearGradient
                colors={[Colors.card, Colors.info]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.container, { width, height }]}
            >
                {content}
            </LinearGradient>
        );
    }

    return (
        <View style={[styles.container, { width, height, backgroundColor: Colors.surface }]}>
            {content}
        </View>
    );
}