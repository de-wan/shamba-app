import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AnnualSale, RouteCollectionChart} from '../../../charts/Chart';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View
          style={{
            height: 360,
            width: 370,
            backgroundColor: '#3CB371',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/avatar.png')}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 75,
                  marginRight: 10,
                }}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Welcome Farmer
              </Text>
            </View>
            <MaterialIcons name="notifications-on" color="#fff" size={24} />
          </View>
          <View
            style={{
              width: '90%',
              backgroundColor: '#fff',
              height: 240,
              borderRadius: 20,
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                2,390 litres
              </Text>
              <Text style={{fontSize: 14}}>Weekly Collections</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                4,500 litres
              </Text>
              <Text style={{fontSize: 14}}>Weekly Expected Yields</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                Ksh 89,000
              </Text>
              <Text style={{fontSize: 14}}>Total payment</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                Ksh 37,500
              </Text>
              <Text style={{fontSize: 14}}>Total expenses</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                0
              </Text>
              <Text style={{fontSize: 14}}>Total loans</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#3cb371', fontSize: 18, fontWeight: 'bold'}}>
                2
              </Text>
              <Text style={{fontSize: 14}}>Saving cards</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 370,
            height: 100,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Wallet')}
            style={{
              width: 80,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 10,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Ionicons name="wallet-outline" size={30} color="#3CB371" />
            <Text style={{fontSize: 14}}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product Management')}
            style={{
              width: 80,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 20,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <MaterialIcons name="collections" size={30} color="#3CB371" />
            <Text style={{fontSize: 14}}>Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Vet and Extension services')}
            style={{
              width: 80,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 20,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Foundation name="graph-trend" size={30} color="#3CB371" />
            <Text style={{fontSize: 14}}>Vet Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Farm Management', {screen: 'Disease'})
            }
            style={{
              width: 80,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 20,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <FontAwesome5 name="pastafarianism" size={30} color="#3CB371" />
            <Text style={{fontSize: 14}}>Report Disease</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 5,
          }}>
          Annual Yield History
        </Text>
        <View
          style={{
            width: 370,
            height: 220,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <AnnualSale />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 5,
          }}>
          Weekly Income
        </Text>
        <View
          style={{
            width: 370,
            height: 220,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <RouteCollectionChart />
        </View>
      </ScrollView>
    </View>
  );
};
export default Dashboard;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
