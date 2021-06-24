import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Daily = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Pulsa & Tagihan</Text>
            </View>
            <View
                style={styles.imgBack}>
                {/* <ScrollView> */}
                {/* <View style={{backgroundColor: '#01A54F', width: '100%',marginLeft: 200}}> */}
                <ScrollView horizontal={true}>
                    <Image style={styles.dailyImg}
                        source={require('../assets/tokpedDaily1.jpg')}>

                    </Image>
                    <View style={styles.dailyBox}>
                        <View style={{
                            borderBottomRightRadius: 25,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            backgroundColor: '#ABDF88',
                            height: 80,
                        }}>
                            <View style={{
                                borderBottomRightRadius: 25,
                                borderTopLeftRadius: 15,
                                backgroundColor: '#bced9a',
                                height: 60,
                                marginLeft: 40,
                                marginTop: 20,
                            }} />
                        </View>
                        <View style={styles.imgDaily}>
                            <Icon
                                style={styles.iconDaily}
                                name='mobile-phone'
                                size={40}
                                color='#60b7ff' />
                        </View>
                        <View style={styles.textDaily}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#01A54F'
                            }}>PAKET DATA</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: 'black',
                                marginRight: 10,
                                marginTop: 5,
                            }}>Kuota mu habis gan? hahaha beli di sini dong</Text>
                        </View>
                    </View>
                    <View style={styles.dailyBox}>
                        <View style={{
                            borderBottomRightRadius: 25,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            backgroundColor: '#ABDF88',
                            height: 80,
                        }}>
                            <View style={{
                                borderBottomRightRadius: 25,
                                borderTopLeftRadius: 15,
                                backgroundColor: '#bced9a',
                                height: 60,
                                marginLeft: 40,
                                marginTop: 20,
                            }} />
                        </View>
                        <View style={styles.imgDaily}>
                            <Icon
                                style={styles.iconDaily}
                                name='television'
                                size={40}
                                color='#60b7ff' />
                        </View>
                        <View style={styles.textDaily}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#01A54F'
                            }}>TELEVISI</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: 'black',
                                marginRight: 10,
                                marginTop: 5,
                            }}>Bosan Televisi nasional isinya jelek? Bayar di sini dijamin ajib</Text>
                        </View>
                    </View>
                    <View style={styles.dailyBox}>
                        <View style={{
                            borderBottomRightRadius: 25,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            backgroundColor: '#ABDF88',
                            height: 80,
                        }}>
                            <View style={{
                                borderBottomRightRadius: 25,
                                borderTopLeftRadius: 15,
                                backgroundColor: '#bced9a',
                                height: 60,
                                marginLeft: 40,
                                marginTop: 20,
                            }} />
                        </View>
                        <View style={styles.imgDaily}>
                            <Icon
                                style={styles.iconDaily}
                                name='plane'
                                size={40}
                                color='#60b7ff' />
                        </View>
                        <View style={styles.textDaily}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#01A54F'
                            }}>TIKET PESAWAT</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: 'black',
                                marginRight: 10,
                                marginTop: 5,
                            }}>Mau beli tiket pesawat tapi ribet? Beli di sini gampang</Text>
                        </View>
                    </View>
                    <View style={styles.dailyBox}>
                        <View style={{
                            borderBottomRightRadius: 25,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            backgroundColor: '#ABDF88',
                            height: 80,
                        }}>
                            <View style={{
                                borderBottomRightRadius: 25,
                                borderTopLeftRadius: 15,
                                backgroundColor: '#bced9a',
                                height: 60,
                                marginLeft: 40,
                                marginTop: 20,
                            }} />
                        </View>
                        <View style={styles.imgDaily}>
                            <Icon
                                style={styles.iconDaily}
                                name='credit-card'
                                size={40}
                                color='#60b7ff' />
                        </View>
                        <View style={styles.textDaily}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#01A54F'
                            }}>TAGIHAN</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: 'black',
                                marginRight: 10,
                                marginTop: 5,
                            }}>Mau bayar tagihan ribet? di sini gampang sih</Text>
                        </View>
                    </View>
                    <View style={styles.dailyBox}>
                        <View style={{
                            marginTop: 85,
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderRadius: 50,
                            height: 35,
                            width: 35,
                            elevation: 5,
                            shadowColor: "#000000",
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            shadowOffset: {
                                height: 1,
                                width: 1
                            }
                        }}>
                            <Icon
                            style={{alignSelf: 'center', marginTop: 3, marginLeft: 3,}}
                            name='angle-right'
                            size={25}
                            color='#01A54F' />
                        </View>

                        <Text style={{
                                // borderWidth: 1,
                                width: 100,
                                textAlign: 'center',
                                alignSelf: 'center',
                                marginTop: 10,
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#01A54F'
                            }}>Lihat Produk Lainnya</Text>
                    </View>
                </ScrollView>
                {/* </View> */}
                {/* </ScrollView> */}
            </View>
        </View>
    )
}

export default Daily;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgBack: {
        backgroundColor: '#01A54F',
        width: '100%',
        height: 260,
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    dailyImg: {
        resizeMode: 'cover',
        height: 260,
        width: 120,
        marginLeft: 5,
    },
    dailyBox: {
        alignSelf: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        //  borderWidth: 1,
        borderRadius: 5,
        height: 220,
        width: 120,
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    imgDaily: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        // borderWidth: 1,
        borderRadius: 25,
        marginTop: 45,
        height: 70,
        width: 70,
        elevation: 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    iconDaily: {
        alignSelf: 'center',
    },
    textDaily: {
        marginTop: 45,
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    header: {
        paddingLeft: 10,
        // marginLeft: 5,
        marginVertical: 5,
    }
})