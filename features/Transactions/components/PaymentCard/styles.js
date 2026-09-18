import { StyleSheet } from "react-native"
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#111419",
        width:'90%',
        height:75,
        borderRadius:15,
        flexDirection:"row",
  
    },
    containerWarning:{
        borderWidth: 1,
        borderColor: "#f16c3b",
    },
    dateContainer:{
        flex:1.1,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:5
    },
    date:{
        width:55,
        height:55,
        borderRadius:18,
        backgroundColor:"#1c1f26",
        justifyContent:"center",
        alignItems:"center"
    },
    dateWarning:{
        backgroundColor:"#3b221b",
    },
    textContainer:{
        flex:3,
        justifyContent:"center",
        paddingHorizontal:5,
    },
    paymentContainer:{
        flex:1.2,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"flex-end",
        paddingHorizontal:10,
    }
});
export default styles;