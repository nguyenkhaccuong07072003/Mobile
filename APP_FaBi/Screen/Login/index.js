import { View, 
         Text,
         TouchableOpacity,
         TextInput,
         KeyboardAvoidingView
} from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';


import styles from './style';
import { Button } from 'react-native-paper';
const Login = () => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={styles.login}>
      <Text style={styles.title}>Login</Text>
      <KeyboardAvoidingView>
        <View style={styles.usename}>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles. input} placeholder='Enter Username'/>
        </View>

        <View style={styles.pass}>
          <Text style={styles.text}>Pass</Text>
          <TextInput style={styles.input} placeholder='Enter Password'/>
        </View>
      </KeyboardAvoidingView>
      
      <View style={styles.comeon}>
          <TouchableOpacity>
            <View style={styles.clickcomeon}>
              <Text style={styles.textComeon}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.contenttext}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity>
          <Button 
            title='Đăng ký' 
            onPress={()=>navigation.navigate('Register')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>

      <View style={styles.request}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text> I agree to all requests</Text>
      </View>
      <Button 
        title='goback'
        onPress={()=>navigation.goback()}
      />
    </View>
  )
}

export default Login;
