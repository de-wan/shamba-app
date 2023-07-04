import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaModal from '../../ui/ShambaModal';
import Register from '../../auth/Register';
import Login from '../../auth/Login';

const Landing = () => {
  const theme = useContext(ThemeContext);

  const { height, width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    innerContainer: {
      height: height,
      display: 'flex',
      justifyContent: 'space-between',
      paddingVertical: 55,
    },
    image: {
      flex: 1,
      paddingVertical: 55,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      height: height,
      width: width,
    },
    logo: {
      width: 150,
      height: 80,
      marginTop: 10,
      resizeMode: 'contain',
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
    buttonsWrap: {
      width: '100%',
      height: 160,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      width: '90%',
      height: 50,
      backgroundColor: theme.primary,
      borderRadius: 20,
      borderColor: theme.inverted,
      borderWidth: 2,
    },
    btnText: {
      textAlign: 'center',
      color: theme.wb_color,
      fontWeight: 'bold',
      fontSize: 16,
      paddingTop: 15,
    },
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/cows3.jpg')}
        resizeMode="cover"
      />
      <View style={styles.innerContainer}>
        <View style={styles.topImgWrap}>
          <Image
            style={styles.topImg}
            source={require('../../../assets/images/logo1.png')}
          />
        </View>
        <View style={styles.buttonsWrap}>
          <TouchableOpacity
            onPress={() => setIsRegistering(true)}
            style={styles.button}>
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Or</Text>
          <TouchableOpacity
            onPress={() => setIsLoggingIn(true)}
            style={styles.button}>
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ShambaModal
        visible={isRegistering}
        onRequestClose={() => setIsRegistering(false)}
        title="REGISTER">
        <Register
          moveToLogin={() => {
            setIsRegistering(false);
            setIsLoggingIn(true);
          }}
        />
      </ShambaModal>
      <ShambaModal
        visible={isLoggingIn}
        onRequestClose={() => setIsLoggingIn(false)}
        title="LOGIN">
        <Login
          moveToRegister={() => {
            setIsLoggingIn(false);
            setIsRegistering(true);
          }}
        />
      </ShambaModal>
    </View>
  );
};
export default Landing;
