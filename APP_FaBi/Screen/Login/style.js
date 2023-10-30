import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({ 
    title:{
        textAlign:'center',
        fontSize: 36,
        marginTop: 50,
    }, 
   
    usename:{
        marginTop: 50,
        marginBottom: 20,
        marginLeft: 50,
        
    },
    pass:{
        marginBottom: 30,
        marginLeft: 50,
    },
    text:{
        fontSize: 16,
    },

    input:{
        width: 292,
        height: 41,
        backgroundColor:'#D9D9D9',
        paddingHorizontal: 15, // placeholder lùi vào 1 chút
        borderRadius:10,
    },

    clickcomeon:{
        width: 100, 
        height: 45, 
        backgroundColor:'#C6FAF3',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
       
    },

    comeon:{
        justifyContent:'center',
        alignItems:'center',
    },

    content:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
    },

    contenttextcolor:{
        color: '#FF0000',
    },

    line:{
        height: 1,
        backgroundColor: 'black',
        width: 150, 
        alignSelf: 'center',
    },

    request:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        padding: 15,
    },

})
export default styles;
