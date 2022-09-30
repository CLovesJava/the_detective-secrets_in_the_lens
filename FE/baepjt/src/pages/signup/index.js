import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import { setId } from '../../redux/login';
import { useSelector, useDispatch } from 'react-redux';

const SignUpPage = () => {
  const ID = useSelector((state) => state.id.value)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [id, onChangeId] = React.useState(null);
  const [pw, onChangePw] = React.useState(null);
  const [pwCheck, onChangePwCheck] = React.useState(null);
  const axiosSignup = async() => {
    if (id == '' || pw == '' || pwCheck == '') {
      onChangeId('');
      onChangePw('');
      onChangePwCheck('');
      Alert.alert('빈값이 있습니다!');     
    } else {
      if (pw == pwCheck) {
        try {
          const response = await axios.post('http://j7e102.p.ssafy.io:8080/users/signup',
          {
            "userId" : id,
            "password" : pw,  
          });
          if (response.status === 200) {
            if (response.data.userId == "중복") {
              onChangeId('');
              onChangePw('');
              onChangePwCheck('');
              Alert.alert('이미 존재하는 아이디입니다!');
            }
            else {
              console.log(response);
              dispatch(setId(response.data.userId));
              navigation.navigate('Main');
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("pw != pwcheck");
        Alert.alert('입력값을 확인해 주세요!');
        onChangeId('');
        onChangePw('');
        onChangePwCheck('');
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/start_page/background.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.signuptextcontainer}>
          <Text style={styles.text}>회원가입</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeId}
            value={id}
            placeholder="아이디를 입력하세요."
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePw}
            value={pw}
            placeholder="비밀번호를 입력하세요."
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePwCheck}
            value={pwCheck}
            placeholder="비밀번호를 다시 입력하세요."
          />

          <TouchableOpacity style={styles.button} onPress={axiosSignup}>
            <ImageBackground
              source={require('../../images/modal/button.png')}
              style={{height: '100%', width: '100%'}}>
              <Text style={styles.signuptext}>회원가입</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  signuptextcontainer: {
    marginLeft: '38%',
    marginTop: '7%',
  },
  inputcontainer: {
    marginLeft: '15%',
    marginTop: '3%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'white',
    backgroundColor: 'white',
  },
  button: {
    marginLeft: '30%',
    width: '20%',
    height: '20%',
    marginTop: '3%',
  },
  text: {
    fontFamily: 'HeirofLightRegular',
    fontSize: 40,
    color: 'white',
  },
  logintext: {
    marginLeft: '20%',
    marginTop: '14%',
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
  },
  signuptext: {
    marginLeft: '15%',
    marginTop: '14%',
    fontFamily: 'HeirofLightRegular',
    fontSize: 19,
  },
  spaceEvenlyContainer: {
    marginTop: '2%',
    marginLeft: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    height: '50%',
  },
});

export default SignUpPage;