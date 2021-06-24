import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <View style={styles.menu}>
                        <Icon
                            name='gamepad'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Official Store</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='github-alt'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Lihat Semua</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='rocket'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Official Store</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='apple'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Lihat Semua</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='linux'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Official Store</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='android'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Lihat Semua</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='steam-square'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Official Store</Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Icon
                            name='wifi'
                            // source={require('../assets/search.png')}
                            style={styles.iconKupon}
                            size={34}
                            color={'#60b7ff'} />
                        <View style={styles.textIcon}>
                            <Text style={styles.textStyle}>Lihat Semua</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
    },
    wrapper: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        marginVertical: 10,
        marginLeft: 5,
    },
    menu:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        
    },

    iconKupon: {
        padding: 5,
        // marginLeft: 10,
        // alignItems: 'center',
    },
    textIcon: {
    },
    textStyle: {
        textAlign : 'center',
        fontWeight: '600', 
        fontSize: 12, 
    }
})