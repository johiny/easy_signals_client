import { View, Animated, StyleSheet } from 'react-native';
import { useWindowDimensions } from "react-native";
const AnimateBackground = () => {
    const { height, width } = useWindowDimensions();
    const ballSize = width * 0.15; // Tamaño relativo de las bolas

    const animatedStyles = [...Array(17)].map((_, index) => {
      const delay = index * 10 + 20; // Delay relativo para la animación
      const animation = new Animated.Value(0);
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: index * 10 + 20,
        useNativeDriver: true,
      })
    ).start();
      return {
        transform: [
          {
            translateX: index % 2 === 0 ? width : 0, // Mover cada segunda bola al lado derecho
          },
        ],
        width: ballSize,
        height: ballSize,
        borderRadius: ballSize / 2,
        position: 'absolute',
        backgroundColor: '#40a2d8', // Puedes ajustar el color según tus necesidades
        zIndex: -50,
        left: `${index % 2 === 0 ? 100 : 0}%`, // Posición relativa en el eje X
        top: `${((index / 2) % 2) * 50}%`, // Posición relativa en el eje Y
      };
    });
  
    return (
      <View style={{ width, height }}>
        {animatedStyles.map((style, index) => (
          <View key={index} style={style} />
        ))}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    backgroundColor: '#1d232a',
    overflow: 'hidden',
    zIndex: -50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default AnimateBackground;