import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const avatar = require('../../assets/avatar.jpg');

const Info = () => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity style={styles.touchback}> 
        <Ionicons name="arrow-back-sharp" size={30} color="black" />
      </TouchableOpacity>
      <View style = {styles.Info}>
        <Image source={avatar} style = {styles.avatar}/>
        <Text style={styles.username}>Nguyễn Thảo</Text>
        <View style = {styles.DonHang}>
          <Text style = {styles.ThongTin}>1. Đơn hàng</Text>
          <Text style = {styles.ThongTin}>2. Thông Tin cá nhân</Text>
          <Text style = {styles.ChiTiet}>Năm sinh:</Text>
          <Text style = {styles.ChiTiet}>Địa chỉ:</Text>
          <Text style = {styles.ChiTiet}>SĐT:</Text>
        </View>
      </View>
    </View>
  )
}

export default Info