import {StyleSheet} from 'react-native'
import {Colors} from "../../../../shared/theme/Colors"
const styles=StyleSheet.create({
    container:{
        width:'90%',
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    content:{
        flexDirection:"row",
        height:60,
        backgroundColor:Colors.surfaceAlt,
        borderRadius:8,
    },
    image:{
        flex:0.8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#49150f",
        padding:5,
        borderRadius:8,
    },
    event:{
        flex:3,
        justifyContent:"center",
        paddingLeft:10,
        gap:2,

    },
    amount:{
        flex:1.2, 
        justifyContent:"center",
        alignItems:"center",
        paddingRight:10,
        gap:2,
    }
});
export default styles;