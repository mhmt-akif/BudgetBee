import { useRef, useState } from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { CategoryTypeModal } from "../CategoryTypeModal/CategoryTypeModal"

export const Dropdown = ({ value = "Gelir", onSelect }) => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [anchor, setAnchor] = useState(null)
    const containerRef = useRef(null)

    const openMenu = () => {
        containerRef.current?.measureInWindow((x, y, width, height) => {
            setAnchor({ x, y, width, height })
            setMenuVisible(true)
        })
    }

    return (
        <>
            <TouchableOpacity
                ref={containerRef}
                style={styles.container}
                onPress={openMenu}
                activeOpacity={0.7}
            >
                <Text style={styles.valueTxt}>{value}</Text>
                <View style={styles.arrowDown}>
                    <AntDesign name="down" size={12} color="white" />
                </View>
            </TouchableOpacity>

            <CategoryTypeModal
                visible={menuVisible}
                anchor={anchor}
                value={value}
                onClose={() => setMenuVisible(false)}
                onSelect={onSelect}
            />
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        minWidth: 90,
        height: 40,
        paddingHorizontal: 14,
        backgroundColor: "#07090d",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    valueTxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    arrowDown: {
        padding: 4,   // dokunma alanını biraz büyütür, sadece ikonun kendisi çok küçük kalmasın diye
    }
})
