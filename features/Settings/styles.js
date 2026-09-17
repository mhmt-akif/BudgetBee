import {StyleSheet} from 'react-native'
import { Colors } from '../../shared/theme/Colors';
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background
    },
    sectionTitle:{
        width:"90%",
        color:Colors.white,
        fontSize:16,
        fontWeight:"bold",
        marginTop:12,
        marginBottom:4,
    },
    chipRow:{
        width:"90%",
        flexDirection:"row",
        flexWrap:"wrap",
    }
});
export default styles;