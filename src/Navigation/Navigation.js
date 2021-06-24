import React from 'react';
import { Image,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard';
import Profile from '../screen/profile';
import Keranjang from '../screen/cart';




const Tab = createBottomTabNavigator();

const Navigation=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true
   }} >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/homeOn.png'):require('../assets/homeOff.png')
              } />
          ),
          tabBarLabel: 'Home'
        }}
      />
      {/* <Tab.Screen
        name="Cart"
        component={Keranjang}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/cartOn.png'):require('../assets/cartOff.png')
              } />
          ),
          tabBarLabel: 'Keranjang'
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/userOn.png'):require('../assets/userOff.png')
              } />
          ),
          tabBarLabel: 'Akun'
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation

const styles = StyleSheet.create({

  bottomTabIcon: {
    display: 'flex',
    width: 30,
    height: 30,
    padding: 5,
    marginVertical: 5,
    marginTop: 15,
    marginBottom: 10,
  },
});