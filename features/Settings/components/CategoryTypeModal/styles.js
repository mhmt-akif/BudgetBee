import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
    },
    menu: {
        position: "absolute",
        backgroundColor: "#07090d",
        borderRadius: 10,
        paddingVertical: 4,
        overflow: "hidden",
    },
    option: {
        height: 40,
        paddingHorizontal: 14,
        justifyContent: "center",
    },
    optionSelected: {
        backgroundColor: "#161a20",
    },
    optionTxt: {
        color: "#ddece1",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
