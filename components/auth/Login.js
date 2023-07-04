import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import ShambaInput from '../ui/ShambaInput';
import ShambaButton from '../ui/ShambaButton';

const Login = ({ moveToRegister }) => {
  const theme = useContext(ThemeContext);
  const { isLoading, login, message, messageType } = useContext(AuthContext);

  const styles = StyleSheet.create({
    auth: {
      backgroundColor: theme.app_bg,
      padding: 20,
      position: 'relative',
    },
    image: {
      flex: 1,
      paddingVertical: 55,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      height: 200,
      width: 200,
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
      textAlign: 'center',
    },
    formMessage: {
      color: theme.gray1,
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    primaryText: {
      color: theme.primary,
    },
    dangerText: {
      color: theme.danger,
    },
    btn: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 2,
      flexDirection: 'row',
      borderRadius: 10,
    },
    primaryBtn: {
      backgroundColor: theme.primary,
      borderWidth: 2,
      borderColor: theme.inverted,
    },
    primaryBtnText: {
      color: theme.wb_color,
    },
    registerLinkWrap: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: 10,
      alignItems: 'center',
    },
    registerLink: {
      // underline
      textDecorationLine: 'underline',
      marginLeft: 5,
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
    registerLinkText: {
      textDecorationLine: 'underline',
      color: theme.primary,
    },
    grayText: {
      color: theme.gray1,
    },
  });

  const [localMessage, setLocalMessage] = useState('');
  const [email, setEmail] = useState('naomi@admin.com');
  const [password, setPassword] = useState('admin@123');
  const submitLogin = () => {
    setLocalMessage('');
    if (email && password) {
      login(email, password);
    } else {
      setLocalMessage('Please fill all fields');
    }
  };

  /* const styles = Stylesheet.create({
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
  }); */

  return (
    <ScrollView style={styles.auth}>
      <View style={styles.topImgWrap}>
        <Image
          style={styles.topImg}
          source={require('../../assets/images/logo1.png')}
        />
      </View>
      <Text style={styles.title}>Sign In</Text>

      {message && messageType === 'success' && (
        <Text style={[styles.formMessage, styles.primaryText]}>{message}</Text>
      )}
      {message && messageType === 'error' && (
        <Text style={[styles.formMessage, styles.dangerText]}>{message}</Text>
      )}

      {localMessage && (
        <Text style={[styles.formMessage, styles.dangerText]}>
          {localMessage}
        </Text>
      )}
      {isLoading && <ActivityIndicator size={'large'} color={theme.primary} />}
      <ShambaInput
        label="Email Address"
        placeholder="name@gmail.com"
        inputType="email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <ShambaInput
        label="Password"
        placeholder="name@gmail.com"
        value={password}
        onChangeText={value => setEmail(value)}
        secureTextEntry={true}
      />
      <View style={styles.registerLinkWrap}>
        <Text style={styles.grayText}>No Account?</Text>
        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => {
            moveToRegister && moveToRegister();
          }}>
          <Text style={styles.registerLinkText}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.primaryBtn]}
        onPress={() => submitLogin()}>
        <Text style={styles.primaryBtnText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
