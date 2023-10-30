import { View, Text , TouchableOpacity,  } from 'react-native'
import React from 'react'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';


const Notice = () => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity style={styles.touchback}> 
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {styles.title}>Thông Báo</Text>
        <Text style = {styles.noti}>1. Ngày 21/10 đến 15/11 có ưu đãi đặc biệt mua 2 tặng 1</Text>
    </View>
  )
}

export default Notice