import { StyleSheet } from "react-native";
import { Colors } from "../../../../shared/theme/Colors";

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:14,
        paddingVertical:8,
        borderRadius:18,
        backgroundColor: "#111419",
        alignSelf:"flex-start",
        minWidth:60,
        minHeight:36,
        margin:5,
        
    },
    labelText:{
        color:Colors.white,
        fontSize:17,
        fontWeight:"bold",
    },
    btnContainer:{
        width:20,
        height:20,
        borderRadius:15,
        backgroundColor:"#25282d",
        marginLeft:10,
        justifyContent:"center",
        alignItems:"center",
    },
    btnTxt:{
        color:"white",
        fontWeight:"bold",
    }
});
export default  styles;