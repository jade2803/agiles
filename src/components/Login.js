import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagen1}source={{uri:"https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"}}/>
            <Text style={styles.titulo}>INICIO DE SESION</Text>
            <TextInput
                placeholder="pmartinez@gmail.com"
                placeholderTextColor={"gray"}
                style={styles.textInput}
            />
            <TextInput
                placeholder="contraseña"
                placeholderTextColor={"gray"}
                style={styles.textInput}
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <LinearGradient
                    colors={['#62AE73', '#4ABA63', '#23B643']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.button}>
                    <Text style={styles.text}>Iniciar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#70D987",
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
    },
    textInput: {
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingStart: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    imagen1: {
        width:80,
        height:80,
    }
});

export default Login;
