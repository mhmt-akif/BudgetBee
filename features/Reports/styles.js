import {StyleSheet} from 'react-native'
import { Colors } from '../../shared/theme/Colors'

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:60,
        backgroundColor:Colors.background
    },
    title:{
        width:"90%",
        color:Colors.white,
        fontSize:22,
        fontWeight:"bold",
        marginBottom:8,
    },
    subtitle:{
        width:"90%",
        color:Colors.label,
        fontSize:14,
    }
});
export default styles;
