import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Daily from '../components/Daily';
import Menu from '../components/Menu';
import SearchBox from '../components/SearchBox';


const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <SearchBox />
        <View style={styles.headerIcon}>
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/heart.png')} />
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/mail.png')} />
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/bell.png')} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.location}>
          <Icon
            name='map-marker'
            // source={require('../assets/search.png')}
            style={styles.icon}
            size={20}
            color={'gray'}
          />
          <Text style={{ marginLeft: 5, fontSize: 14, }}>Dikirim ke</Text>
          <Text style={{ marginLeft: 5, fontSize: 14, fontWeight: 'bold' }}>Kerajaan Pajajaran</Text>
          <Icon
            name='angle-down'
            // source={require('../assets/search.png')}
            style={styles.icon}
            size={20}
            color={'gray'}
          />
        </View>
        <View style={styles.kupon}>
          <View style={styles.kuponWrapper}>
            <Icon
              name='bullseye'
              // source={require('../assets/search.png')}
              style={styles.iconKupon}
              size={26}
              color={'#60b7ff'} />
            <View style={styles.textIcon}>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 12, }}>Rp4.000</Text>
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#60b7ff', fontWeight: 'bold' }}>Top-up OPO</Text>
            </View>
          </View>
          <View style={styles.kuponWrapper}>
            <Icon
              name='truck'
              // source={require('../assets/search.png')}
              style={styles.iconKupon}
              size={22}
              color={'#60b7ff'} />
            <View style={styles.textIcon}>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 12, }}>Bebas Ongkir</Text>
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'black', fontWeight: '600' }}>20x Lagi</Text>
            </View>
          </View>
          <View style={styles.kuponWrapper}>
            <Icon
              name='money'
              // source={require('../assets/search.png')}
              style={styles.iconKupon}
              size={22}
              color={'#60b7ff'} />
            <View style={styles.textIcon}>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 12, }}>Rp0 (0 Points)</Text>
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#60b7ff', fontWeight: 'bold' }}>Tambah Points</Text>
            </View>
          </View>
          <View style={styles.kuponWrapper}>
            <Icon
              name='trophy'
              // source={require('../assets/search.png')}
              style={styles.iconKupon}
              size={22}
              color={'gold'} />
            <View style={styles.textIcon}>
              <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 12, }}>Gold</Text>
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'black', fontWeight: '600' }}>102 Kupon</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <Menu />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 10 }}>
            <Image style={{
              marginRight: 15,
              height: 100,
              width: 340,
              borderRadius: 15, resizeMode: 'contain'
            }} source={require('../assets/tokped1.jpg')} />
            <Image style={{
              marginRight: 15,
              height: 100,
              width: 340,
              borderRadius: 15, resizeMode: 'contain'
            }} source={require('../assets/tokped2.jpg')} />
            <Image style={{
              marginRight: 15,
              height: 100,
              width: 340,
              borderRadius: 15, resizeMode: 'contain'
            }} source={require('../assets/tokped3.jpg')} />
            <Image style={{
              marginRight: 15,
              height: 100,
              width: 340,
              borderRadius: 15, resizeMode: 'contain'
            }} source={require('../assets/tokped4.jpg')} />
          </ScrollView>
          <Menu />
          <Daily/>
          <Daily/>
        </View>
      </ScrollView>
    </View>
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
    height: 50,
    paddingRight: 5,
    marginVertical: 5,
  },
  headerIcon: {
    justifyContent: 'flex-end',
    marginRight: 10,
    flexDirection: 'row',
  },
  location: {
    height: 35,
    paddingLeft: 5,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  iconKupon: {
    padding: 5,
    marginLeft: 10,
  },
  kupon: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    height: 90,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
    //  padding:20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  kuponWrapper: {
    //  padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 35,
    width: 140,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textIcon: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menu: {
    // padding:10,
  },

  feedImage: {
    marginTop: 10,
    marginRight: 10,
    height: 120,
    width: 280,
    borderRadius: 25,
    overflow: 'hidden',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  },
})
export default Dashboard;
