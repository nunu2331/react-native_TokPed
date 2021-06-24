import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.lefHeader}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Akun Saya</Text>
        </View>
        <View style={styles.headerIcon}>
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/heart.png')} />
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/mail.png')} />
          <Image style={{ height: 25, width: 25, marginLeft: 15, tintColor: '#9FA6B0' }} source={require('../assets/bell.png')} />
        </View>
      </View>

      <View style={styles.kuponWrapper}>
        <Image
          source={require('../assets/ganteng.jpg')}
          style={styles.iconKupon}
        // size={22}
        // color={'#60b7ff'}
        />
        <View style={styles.textIcon}>
          <Text style={styles.textStyle}>aku ganteng</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Icon
              style={{ marginRight: 5, }}
              color={'gold'}
              name='trophy'
              size={24} />
            <Text style={{ fontSize: 14, color: 'gray' }}>Member Gold</Text>
            <Icon
              name='angle-right'
              style={{ marginLeft: 5, }}
              color={'gray'}
              size={24} />
          </View>
        </View>
      </View>
      <View style={styles.bukaToko}>
        <View style={{
          width: 65,
          backgroundColor: '#60b7ff',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
        }}></View>
        <Image
          style={{ marginLeft: 5, width: 50, height: 50, alignSelf: 'center', position: 'absolute', }}
          source={require('../assets/shop.png')} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text style={{ alignSelf: 'center', marginLeft: 5, fontWeight: 'bold', color: 'black', fontSize: 16 }}>Buka Toko Gratis</Text>
          <Icon
            name='angle-right'
            style={{ marginLeft: 110, }}
            color={'gray'}
            size={24} />
        </View>
      </View>
      <View style={styles.quest}>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='credit-card' />
          <Text style={{ fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Toko Member</Text>
          <Text style={{ fontWeight: 'bold' }}>0 Member</Text>
        </View>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='id-badge' />
          <Text style={{ fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Top Quest</Text>
          <Text style={{ fontWeight: 'bold' }}>8 Tantangan</Text>
        </View>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='ticket' />
          <Text style={{ fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Kupon Saya</Text>
          <Text style={{ fontWeight: 'bold' }}>32 Kupon</Text>
        </View>
      </View>
      <View style={styles.Dompet}>
        <View style={styles.headerDompet}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray' }}>Dana di Tokopedia</Text>
          <Text style={{ fontWeight: 'normal', color: '#60b7ff' }}>Atur</Text>
        </View>
        <View style={styles.dompetWrapper}>
          <View style={styles.dompetBox}>
            <View style={styles.iconBox}>
            <Icon
              name='bullseye'
              // source={require('../assets/search.png')}
              style={styles.iconDompet}
              size={32}
              color={'#60b7ff'} />
            </View>
            <View style={styles.textIconDompet}>
              <Text style={{  marginTop: 5, fontWeight: 'bold', fontSize: 12, }}>Rp4.000</Text>
              <Text style={{   fontSize: 12, color: 'gray', fontWeight: 'normal' }}>Top-up OPO</Text>
            </View>
          </View>
          <View style={styles.dompetBox}>
            <View style={styles.iconBox}>
            <Icon
              name='bullseye'
              // source={require('../assets/search.png')}
              style={styles.iconDompet}
              size={32}
              color={'#60b7ff'} />
            </View>
            <View style={styles.textIconDompet}>
              <Text style={{  marginTop: 5, fontWeight: 'bold', fontSize: 12, }}>Rp4.000</Text>
              <Text style={{   fontSize: 12, color: 'gray', fontWeight: 'normal' }}>Top-up OPO</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={{marginVertical: 5, paddingLeft: 10, marginLeft: 10 ,}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Data Transaksi</Text>
        </View>
      <View style={styles.transaksiContainer}>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='credit-card' />
          <Text style={{ textAlign: 'center',fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Menunggu Pembayaran</Text>
          
        </View>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='id-badge' />
          <Text style={{ textAlign: 'center',fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Transaksi Berlangsung</Text>
          
        </View>
        <View style={styles.questBox}>
          <Icon
            style={{ marginTop: 10, }}
            size={24}
            color={'#60b7ff'}
            name='ticket' />
          <Text style={{ textAlign: 'center',fontSize: 12, marginBottom: 5, marginTop: 3, color: 'gray' }}>Semua Transaksi</Text>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingRight: 10,
    // marginVertical: 5,
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  headerIcon: {
    justifyContent: 'flex-end',
    marginRight: 10,
    flexDirection: 'row',
  },
  lefHeader: {
    paddingLeft: 20,
  },
  kuponWrapper: {
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 35,
    width: 140,
    // marginHorizontal: 5,
    // marginVertical: 5,
  },
  iconKupon: {
    // padding: 5,
    marginLeft: 10,
    borderRadius: 50,
    width: 55,
    height: 55,
    // alignItems: 'center',
  },
  textIcon: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  bukaToko: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // flexWrap: 'wrap',
    height: 55,
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
  quest: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 110,
    backgroundColor: 'white',
    // borderWidth: 1,
    marginBottom: 10,
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
  questBox: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
  },
  Dompet: {

    height: 160,
    // borderWidth: 1,
    marginBottom: 10,
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
  headerDompet: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    marginHorizontal: 20
  },
  dompetWrapper: {
    // marginVertical: 5,
    // marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dompetBox: {
    
  },
  iconDompet: {
    alignSelf: 'center',
  },
  iconBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    elevation: 3,
     padding:5,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  textIconDompet: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transaksiContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
    backgroundColor: 'white',
    // borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 15,
  }


})