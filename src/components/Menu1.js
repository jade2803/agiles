import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

const Menu1 = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imagen1}
                source={require('../../assets/marco.png')}
                tintColor="#ffffff"
            />
            <Text style={styles.titulo}>VEN Y DISFRUTA DE</Text>
            <Text style={styles.titulo2}>NUESTRA COMIDA</Text>
            <View style={styles.container1}>
                <Text style={styles.titulo3}>MENÚ</Text>
                <Image style={styles.imagen3} source={{ uri: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/22046.png" }} 
                tintColor="#ffffff"
                />
            </View>
            <Image
                style={[styles.imagen2, { transform: [{ rotate: '180deg' }] }]}
                source={require('../../assets/marco.png')}
                tintColor="#ffffff"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    container1: {
        marginTop:0,
        alignItems: "center",
        justifyContent: "center",
    },
    imagen1: {
        width:200,
        height:200,
        marginTop:40,
        marginLeft:10,
    },
    imagen2:{
        width:200,
        height:200,
        position: "absolute",
        right:0,
        bottom:40,
        marginRight:10,
    },
    imagen3: {
        width:200,
        height:200,
        marginTop:120,
        marginLeft:10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        position: "absolute",
        right: 0,
        marginTop: 110,
        marginRight: 100,
    },
    titulo2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        position: "absolute",
        right: 0,
        marginTop: 130,
        marginRight: 100,
    },
    titulo3: {
        fontSize: 90,
        fontWeight: "bold",
        color: "#fff",
        position: "absolute",
        textAlign: "center",
        top: 0,
    }
});

export default Menu1;