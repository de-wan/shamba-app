import React from 'react';
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

function Register() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.subLoginContainer}>
          <Image
            style={styles.topImg}
            source={require('../../assets/images/logo1.png')}
          />
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputWrap}>
            <Text>Name of Cooperative</Text>
            <TextInput
              style={styles.inputField}
              autoFocus={true}
              placeholder="Milk Cooperative"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="admin@cooperative.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="......"
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.button}>
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.loginLinkWrap}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLinkText}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.nextUiButton}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
                paddingTop: 15,
              }}>
              Next UI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CB371',
  },
  loginContainer: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 55,
  },
  topImg: {
    width: 100,
    height: 70,
    marginTop: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 5,
    borderBottomWidth: 1,
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
  },
  loginLink: {
    // underline
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  loginLinkText: {
    textDecorationLine: 'underline',
    color: '#3CB371',
  },
  nextUiButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3CB371',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
