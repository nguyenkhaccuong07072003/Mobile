import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:'#000',
        marginTop:30,
    },
    touchback:{
        paddingHorizontal:10
    },
    Info:{
        alignItems:'center',
        top:26,
        left:0,
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100,    
    },
    username:{
        textAlign:'center',
        fontSize: 20,
    },   
    ThongTin:{
        paddingTop:20,
        paddingBottom:5,
        fontSize:20,
        flexShrink: 0,
        marginRight:150,
    },
    ChiTiet:{
        paddingTop:20,
        height:50,
        fontSize:20,
        marginLeft:50,
        justifyContent:'space-between',
    },
});

export default styles