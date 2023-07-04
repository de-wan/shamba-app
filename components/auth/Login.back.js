import React from 'react';
import { useContext, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';
import ShambaInput from '../ui/ShambaInput';
import ShambaButton from '../ui/ShambaButton';

function Login() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    auth: {
      backgroundColor: theme.app_bg,
      padding: 20,
    },
    topImgWrap: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    topImg: {
      width: 200,
      height: 140,
      marginTop: 10,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      paddingBottom: 5,
      marginBottom: 10,
      color: theme.gray1,
    },
    formMessage: {
      color: '#E55451',
      fontWeight: 'bold',
      fontSize: 16,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#3CB371',
      borderRadius: 20,
    },
    nextUiButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#3CB371',
      borderRadius: 20,
      borderColor: '#fff',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    inputWrap: {
      width: '90%',
      height: 80,
      marginBottom: 20,
    },
    inputField: {
      width: '100%',
      height: 45,
      textAlign: 'left',
      padding: 10,
      marginTop: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
    },
    submitBtnWrap: {
      width: '90%',
      height: 140,
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    submitBtnText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      paddingTop: 15,
    },
    registerLinkWrap: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    registerLink: {
      // underline
      textDecorationLine: 'underline',
      marginLeft: 5,
    },
    registerLinkText: {
      textDecorationLine: 'underline',
      color: theme.primary,
    },
    grayText: {
      color: theme.gray1,
    },
  });

  const { isLoading, login, message } = useContext(AuthContext);
  const [email, setEmail] = useState('naomi@admin.com');
  const [password, setPassword] = useState('admin@123');
  console.log(message);
  const submitLogin = async () => {
    if (email && password) {
      await login(email, password);
    }
  };

  return (
    <ScrollView style={styles.auth}>
      <View style={styles.topImgWrap}>
        <Image
          style={styles.topImg}
          source={require('../../assets/images/logo1.png')}
        />
      </View>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.formContainer}>
        <View style={styles.subFormContainer}>
          <Text style={styles.formMessage}>{message}</Text>
          {isLoading && (
            <ActivityIndicator size={'large'} color={theme.wb_color} />
          )}
          <ShambaInput
            label="Email Address"
            placeholder="name@gmail.com"
            inputType="email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <ShambaInput
            label="Password"
            placeholder="Enter password"
            inputType="text"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          {/* <View style={styles.inputWrap}>
            <Text>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="name@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter password"
              textContentType="password"
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View> */}
          <View style={styles.registerLinkWrap}>
            <Text style={styles.grayText}>No Account?</Text>
            <TouchableOpacity
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLinkText}>Register</Text>
            </TouchableOpacity>
          </View>
          <ShambaButton text="Log In" onPress={() => {}} />
          {/* <View style={styles.submitBtnWrap}>
            <TouchableOpacity
              onPress={e => submitLogin(e)}
              id="submitBtn"
              style={styles.button}>
              <Text style={styles.submitBtnText}>Log In</Text>
            </TouchableOpacity> */}
          {/* <Text style={{ textAlign: 'center' }}>Don't have an account? </Text> */}
          {/* <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 15,
                }}>
                Go to Register
              </Text>
            </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
