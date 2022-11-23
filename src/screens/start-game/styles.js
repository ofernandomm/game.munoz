import { StyleSheet } from 'react-native';

export const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginVertical:15,
    },
    title:{
        fontSize:18,
        color:'#212121',
        textAlign:'center',
        paddingVertical:20,
    },
    label:{
        fontSize:15,
        paddingVertical:5,
        textAlign:'center'
    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        paddingVertical:20,
    },
    input:{
        width:'100%',
        borderBottomColor:'#a7bed3',
        borderBottomWidth:1,
        minWidth:70,
        fontSize:22,
        paddingVertical:10,
        textAlign:'center'

    },
    buttonContainer:{
        flexDirection:'row',
        width: '70%',
        justifyContent:'space-between',
        marginTop:20,
    },
})