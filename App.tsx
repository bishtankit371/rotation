/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import Button from "./components/Button";
import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';




function App() {


  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 2,
      duration: 1000,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
    fontSize: 20
  };




  return (
    <>
        <TouchableOpacity
          onPress={async () => handleAnimation()}
          style={{ width: 100, marginTop: '50%', marginLeft: '40%' }}
        >
          <Animated.Text style={animatedStyle}>Click me</Animated.Text>
        </TouchableOpacity>

    </>
  )

}


export default App;
