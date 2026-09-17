import {StyleSheet} from 'react-native'
import {Colors} from "../../../../shared/theme/Colors"
const styles=StyleSheet.create({
    container:{
        borderRadius:20,
        paddingHorizontal:25,
        paddingVertical:15,
        marginTop:5,
        
    },
    content:{
       gap:2,
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
        gap:6,
    },
    titleText:{
        fontSize:14,
        fontWeight:'bold',
        color:Colors.label,
    },
    amountText:{
    
        fontFamily:'Sora_700Bold',
       
    },
    dot:{
        width:10,
        height:10,
        borderRadius:5,
    }
});
export default styles;