import React from "react";
import {Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from "react-native";

const PaymentMethodScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/*<View style={styles.balanceDialog}>*/}
                <Text style={{fontSize:18}}>Select Payment Method</Text>
                <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Home')}>
                    <ImageBackground source={{ uri: "https://www.phonecardsrilanka.com/wp-content/uploads/2016/07/creditcard-visa.png" }} style={{width:128,height:128}}>

                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Home')}>
                    <ImageBackground source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/master-card-4-842898.png" }} style={{width:128,height:128}}>

                    </ImageBackground>
                </TouchableOpacity>
            {/*</View>*/}
        </View>
    );
};

export default PaymentMethodScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    balanceDialog: {
        height:320,
        width:280,
        alignItems: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn1: {
        backgroundColor: '#E7D6FD',
        width:250,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginTop: 12,
    },
    btn2: {
        backgroundColor: '#FDE7D6',
        width:250,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginTop: 12
    }
});
