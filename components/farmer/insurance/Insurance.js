import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaButton from '../../ui/ShambaButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Report from './Report';
import Claims from './Claims';
import Subscribed from './Subscribed';

const InsuranceTabs = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.app_bg,
      height: 500,
      width: '100%',
    },
  });

  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarScrollEnabled: true,
        headerShown: false,
        activeTintColor: theme.primary,
        tabBarActiveTintColor: theme.primary,
        inactiveTintColor: 'gray',
        tabBarInactiveTintColor: theme.gray3,
      })}
      sceneContainerStyle={styles.container}>
      <Tab.Screen name="Subscribed" component={Subscribed} />
      <Tab.Screen name="Claims" component={Claims} />
      <Tab.Screen name="Insurance Report" component={Report} />
    </Tab.Navigator>
  );
};

const Insurance = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    insuraceCardsWrap: {
      height: height - 120,
    },
    insuranceCard: {
      backgroundColor: theme.wb_color1,
      height: height - 150,
      width: width - 50,
      margin: 10,
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: 10,
      padding: 20,
      justifyContent: 'space-between',
    },
    insuranceTitle: {
      fontSize: 27,
      color: theme.gray1,
    },
    insuranceItemsWrap: {
      marginTop: 20,
    },
    insuranceItem: {
      color: theme.gray1,
      fontSize: 17,
    },
    insuranceBtn: {
      justifySelf: 'flex-end',
      height: 50,
    },
    insuranceBtnTextWrap: {
      alignItems: 'center',
    },
    insuranceBtnText1: {
      color: theme.primary,
      fontSize: 15,
    },
    insuranceBtnText2: {
      color: theme.primary,
      fontSize: 20,
    },
    downIndicator: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    insuranceTabsWrap: {
      height: 500,
    },
  });

  const availableInsurances = [
    {
      id: 1,
      name: 'Health',
      items: ['Health Insurance'],
      plan_mode: 'Monthly',
      plan_price: 1000,
    },
    {
      id: 2,
      name: 'Linda Mkulima',
      items: ['Livestock', 'Last Benefits', 'Education', 'Hospital Cash'],
      plan_mode: 'Monthly',
      plan_price: 1000,
    },
    {
      id: 3,
      name: 'Boma',
      items: ['Livestock', 'Last Benefits', 'Hospital Cash'],
      plan_mode: 'Monthly',
      plan_price: 1000,
    },
    {
      id: 4,
      name: 'Insurance 4',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      plan_mode: 'Monthly',
      plan_price: 1000,
    },
  ];

  return (
    <ScrollView>
      <ScrollView
        style={styles.insuraceCardsWrap}
        decelerationRate={0}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        horizontal={true}>
        {availableInsurances.map(availableInsurance => {
          return (
            <View style={styles.insuranceCard} key={availableInsurance.id}>
              <View>
                <Text style={styles.insuranceTitle}>
                  {availableInsurance.name}
                </Text>
                <View style={styles.insuranceItemsWrap}>
                  {availableInsurance.items.map(item => {
                    return (
                      <Text key={item} style={styles.insuranceItem}>
                        . {item}
                      </Text>
                    );
                  })}
                </View>
              </View>
              <ShambaButton
                buttonStyle={styles.insuranceBtn}
                btnType="primary"
                outline={true}>
                <View style={styles.insuranceBtnTextWrap}>
                  <Text style={styles.insuranceBtnText1}>
                    {availableInsurance.plan_mode} Plan
                  </Text>
                  {availableInsurance.plan_mode == 'Monthly' ? (
                    <Text style={styles.insuranceBtnText2}>
                      KSH. {availableInsurance.plan_price} / Month
                    </Text>
                  ) : (
                    <Text style={styles.insuranceBtnText2}>
                      KSH. {availableInsurance.plan_price} / Year
                    </Text>
                  )}
                </View>
              </ShambaButton>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.downIndicator}>
        <Text>My Insurance</Text>
        <MaterialCommunityIcons
          name="chevron-down"
          size={30}
          color={theme.gray1}
        />
      </View>
      <View style={styles.insuranceTabsWrap}>
        <InsuranceTabs />
      </View>
    </ScrollView>
  );
};

export default Insurance;
