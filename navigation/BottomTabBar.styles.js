import { StyleSheet } from "react-native"
import { Colors } from "../shared/theme/Colors"

const FAB_SIZE=60

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:Colors.background,
    },
    bar:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        height:78,
        paddingBottom:18,
        paddingHorizontal:10,
        backgroundColor:"#111419",
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
    },
    tab:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:4,
    },
    label:{
        fontSize:11,
        fontWeight:"600",
    },
    fabSpacer:{
        width:FAB_SIZE,
    },
    fabWrapper:{
        position:"absolute",
        top:-FAB_SIZE/2,
        left:"50%",
        marginLeft:-FAB_SIZE/2,
        shadowColor:"#4f46e5",
        shadowOffset:{width:0,height:6},
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:8,
    },
    fab:{
        width:FAB_SIZE,
        height:FAB_SIZE,
        borderRadius:FAB_SIZE/2,
        justifyContent:"center",
        alignItems:"center",
    }
});
export default styles;
