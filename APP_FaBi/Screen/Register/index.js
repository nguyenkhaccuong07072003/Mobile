import { View,
         Text,
         TextInput,
         TouchableOpacity,
         KeyboardAvoidingView,
         Platform   
} from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import { Button } from 'react-native-paper';
//import NavigationContainer from '@react-navigation/stack';


const Register = ({navigation})  => {
  const [usename, setTask1] = useState('');
  const [year, setTask2] = useState('');
  const [address, setTask3] = useState('');
  const [phoneNumber, setTask4] = useState('');
  const [pass, setTask5] = useState('');
  const [passagain, setTask6] = useState('');
  const Popup = () =>{
    if(usename.length === 0 && year.length === 0 && address.length === 0 && phoneNumber.length === 0 && pass.length === 0 && passagain.length === 0  ){
      alert('Vui lòng nhập đủ thông tin')
      return false;
    }
    alert('Đăng ký thành công')
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={10}
    style={styles.container}
    >
      <View style={styles.register}>
      <Text style={styles.title}>Sign up</Text>
      
        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Tên đăng ký</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Name'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Năm sinh</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Year'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Địa chỉ</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Address'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Số điện thoại</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter PhoneNumber'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Mật khẩu</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Pass'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Nhập lại mật khẩu</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Pass again'/>
        </View>
      

        <View style={styles.button}>
          <TouchableOpacity
            onPress={Popup}
          >
            <View style={styles.clickbutton}>
              <Text style={styles.textbutton}>Đăng ký</Text>
            </View>  
          </TouchableOpacity>
        </View> 
        <Button 
          title='go back'
          onPress={()=>navigation.goBack()}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register;