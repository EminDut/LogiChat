import React, {useState,useEffect} from 'react';
import {View, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputUser from '../Inputs/InputUser';
import TouchableLogin from '../Inputs/TouchableLogin';
import TouchableTerms from '../Inputs/TouchableTerms';
import TouchablePrivacy from '../Inputs/TouchablePrivacy';
import TouchableAccount from '../Inputs/TouchableAccount';
import KeyboardControl from '../Inputs/KeyboardControl';
import auth from '@react-native-firebase/auth';
import HomeScreen from './HomeScreen';

const logoImg = require('../assets/logo2.png');




function LoginScreen() {
const navigation = useNavigation();


  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = async props => {
  //   try {
  //     if (user.length > 3 && password.length >= 8) {
  //       await auth().signInWithEmailAndPassword(user, password);

  //       navigation.navigate('HomeScreen');
  //     } else {
  //       Alert.alert(' Kullanıcı adı ve şifre boş geçilemez.');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // setMessage(error.message);
  //     Alert.alert(
  //       'Kullanıcı Adı veya Şifre yanlış, lütfen tekrar deneyiniz...',
  //     );

  //     setUser('');
  //     setPassword('');
  //   }
  // };

 
       
  

  const handleLogin = async () => {
    try {
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Kullanıcı Adı veya Şifre yanlış, lütfen tekrar deneyiniz...',
      );
      setUser("");
      setPassword("");
    }
  };

  const handleTouchablePress = () => {
    navigation.navigate('TermScreen');
  };

  const handlePrivacy = () => {
    navigation.navigate('PrivacyScreen');
  };

  const handleUser = () => {
    navigation.navigate('NewRecord');
  };

  return (
    <KeyboardControl>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={logoImg}
            style={{width: 350, height: 350, marginBottom: -20}}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 60,
          }}>
          {/* <InputUser
            user={user}
            setUser={setUser}
            password={password}
            setPassword={setPassword}
          /> */}
          <TouchableLogin handleLogin={handleLogin} />
          <TouchableAccount handleUser={handleUser} />
        </View>

        <View style={{flex: 0.2, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <TouchableTerms onPress={handleTouchablePress} />
          </View>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <TouchablePrivacy handlePrivacy={handlePrivacy} />
          </View>
        </View>
      </View>
    </KeyboardControl>
  );
}

export default LoginScreen;
