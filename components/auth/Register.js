import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
import ShambaInput from '../ui/ShambaInput';
import ShambaButton from '../ui/ShambaButton';

function Register({moveToLogin}) {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
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
    loginContainer: {
      flex: 1,
      width: width,
      height: height,
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 55,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      paddingBottom: 5,
      marginBottom: 10,
    },
    subLoginContainer: {
      width: '85%',
      height: '85%',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 10,
    },
    button: {
      width: '90%',
      height: 50,
      backgroundColor: '#3CB371',
      borderRadius: 20,
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
    registerBtnText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      paddingTop: 15,
    },
    loginLinkWrap: {
      marginTop: 20,
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginLink: {
      // underline
      textDecorationLine: 'underline',
      marginLeft: 5,
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
    loginLinkText: {
      textDecorationLine: 'underline',
      color: theme.primary,
    },
    grayText: {
      color: theme.gray1,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topImgWrap}>
        <Image
          style={styles.topImg}
          source={require('../../assets/images/logo1.png')}
        />
      </View>
      <Text style={styles.title}>Register</Text>
      <ShambaInput
        label="Name of Cooperative"
        placeholder="Milk Cooperative"
        autoFocus={true}
      />
      <ShambaInput
        label="Email Address"
        placeholder="admin@cooperative.com"
        inputType="email"
      />
      <ShambaInput
        label="Password"
        placeholder="......"
        secureTextEntry={true}
      />
      <ShambaButton
        text="Register"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <View style={styles.loginLinkWrap}>
        <Text style={styles.grayText}>Already have an Account?</Text>
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => moveToLogin()}>
          <Text style={styles.loginLinkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Register;