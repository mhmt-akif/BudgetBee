import {StyleSheet} from 'react-native'
import {Colors} from "../../../../shared/theme/Colors"
const styles=StyleSheet.create({
    container:{
        width:'90%',
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:4,
    },
    content:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor:"#232830",
        gap:12,
    },
    contentLast:{
        borderBottomWidth:0,
    },
    image:{
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#49150f",
    },
    event:{
        flex:1,
        minWidth:0,
        justifyContent:"center",
        gap:2,
    },
    amount:{
        alignItems:"flex-end",
        justifyContent:"center",
        flexShrink:0,
        gap:2,
    }
});
export default styles;