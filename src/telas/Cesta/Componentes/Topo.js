import react from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from './Texto';
import TopoImage from '../../../../assets/topo.png';

export default function Topo({ titulo }) {
    return <>
        <Image source={TopoImage} style={estilos.TopoImage} />
        <Texto style={estilos.Titulo}>{titulo}</Texto>
    </>
}

const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    TopoImage: {
        width: "100%",
        height: 578 / 768 * width
    },
    Titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        paddingTop: 20
    }
})