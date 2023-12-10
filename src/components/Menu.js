import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Menu = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.imagen1}
                source={require('../../assets/marco.png')}
                tintColor="#ffffff"
            />
            <View style={styles.menuContainer}>
                <Text style={styles.titulo}>MENÚ</Text>
                {renderSubtitulo("Hamburguesas")}
                {renderImagenRow([
                    "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg",
                    "https://www.alqueria.com.co/sites/default/files/hamburguesa-con-amigos-y-salsa-de-champinones_0.jpg",
                    "https://pronacatqma.com/images/com_yoorecipe/banner_superior/18231_1.jpg",
                ])}
                {renderTexto("Hamburguesa clásica   $5.99")}
                {renderTexto("Hamburguesa pollo     $6.99")}
                {renderTexto("Hamburguesa lentejas  $7.99")}
                {renderSubtitulo("Perros calientes")}
                {renderImagenRow([
                    "https://img.freepik.com/foto-gratis/hot-dog-ternera-parrilla-snack-ketchup-ia-generativa_188544-7829.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais",
                    "https://img.freepik.com/fotos-premium/hot-dog-chili-queso-encima_759095-4085.jpg?w=360",
                    "https://img.freepik.com/fotos-premium/hot-dog-queso-salsa-tomate-sobre-mesa_759095-4103.jpg?w=2000",
                ])}
                {renderTexto("Perro clásico     $3.99")}
                {renderTexto("Perro especial    $4.99")}
                {renderTexto("Perro ranchero    $5.99")}
                {renderSubtitulo("Porción pizzas")}
                {renderImagenRow([
                    "https://www.comedera.com/wp-content/uploads/2014/04/como-hacer-pizza-facil-en-casa.jpg",
                    "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYowl01ZmCVWAvQl3HcS2ajr0_zdvB2-GMjC1JfH8iiuUFiMoW-tQ-ozHlPh6Ee81BE0&usqp=CAU",
                ])}
                {renderTextoWithMargin("Pizza carnes    $2.99")}
                {renderTextoWithMargin("Pizza vegetariana   $1.99")}
                {renderTextoWithMargin("Pizza pollo y miel  $3.99")}
                {renderTextoWithMargin("")}
                {renderTextoWithMargin("")}
            </View>
            <Image
                style={[styles.imagen2, { transform: [{ rotate: '180deg' }] }]}
                source={require('../../assets/marco.png')}
                tintColor="#ffffff"
            />
        </ScrollView>
    );
}

const renderSubtitulo = (texto) => (
    <Text style={styles.subtitulo}>{texto}</Text>
);

const renderImagenRow = (uris) => (
    <View style={styles.imagenesContainer}>
        {uris.map((uri, index) => renderImagen(uri, index))}
    </View>
);

const renderImagen = (uri, index) => (
    <Image key={index} style={styles.imagen} source={{ uri }} />
);

const renderTexto = (texto) => (
    <Text style={styles.texto}>{texto}</Text>
);

const renderTextoWithMargin = (texto) => (
    <Text style={styles.textoWithMargin}>{texto}</Text>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#000000",
        alignItems: 'center',
    },
    menuContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    imagenesContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        left:30,
        marginLeft:10,
    },
    imagen1: {
        width: 200,
        height: 200,
        marginTop: 40,
        marginLeft: 10,
        position: "absolute",
        left: 0,
    },
    imagen2: {
        width: 200,
        height: 200,
        position: "absolute",
        right: 0,
        bottom: 20,
        marginRight: 10,
    },
    imagen: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    titulo: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: 'flex-start',
        marginTop: 90,
        marginLeft: 70,
    },
    subtitulo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#EE8D1B",
        marginTop: 10,
        marginBottom: 5,
        left:30,
        marginLeft:10,
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 5,
        marginBottom: 10,
        left:30,
        marginLeft:10,
    },
    textoWithMargin: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        left:30,
        marginLeft:10,
    },
});

export default Menu;
