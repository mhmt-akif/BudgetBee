import { Modal, Pressable, View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const OPTIONS = ["Gider", "Gelir"]

export const CategoryTypeModal = ({ visible, onClose, onSelect, anchor, value }) => {
    if (!anchor) return null

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>
                <View
                    style={[
                        styles.menu,
                        {
                            top: anchor.y + anchor.height + 2,
                            left: anchor.x,
                            width: anchor.width,
                        },
                    ]}
                >
                    {OPTIONS.map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={[styles.option, option === value && styles.optionSelected]}
                            onPress={() => {
                                onSelect?.(option)
                                onClose()
                            }}
                        >
                            <Text style={styles.optionTxt}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Pressable>
        </Modal>
    )
}
