import React from 'react';
import { View, Text, ScrollView, StyleSheet,TextInput, Image } from 'react-native';
import SearchBox from '../components/SearchBox';
const Dashboard = () => {
  return(
      <ScrollView style={styles.container}>
          <View style={styles.headerWrapper}>
            <SearchBox/>
            <View style={styles.headerIcon}>
            <Image style={{height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0'}} source={require('../assets/heart.png')}/>
            <Image style={{height: 25, width: 25, marginLeft: 15,tintColor: '#9FA6B0'}} source={require('../assets/mail.png')}/>
            <Image style={{height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0'}} source={require('../assets/bell.png')}/>
            </View>
          </View>
          <View style={styles.location}>
            <View style={{}}></View>
          </View>
      </ScrollView>
  )
}
 const styles = StyleSheet.create({
     container: {
         flex: 1,
        backgroundColor: 'white',
     },
     headerWrapper: {
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row',
         height: 70,
         borderWidth: 1,
     },
     headerIcon: {
        justifyContent: 'flex-end',
        marginRight: 15,
        flexDirection: 'row',
     },
     location: {
         borderWidth: 1
     }
 })
export default Dashboard;
