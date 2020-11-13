/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

const Modal = ({show, close}) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{translateY: state.container}],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateY: state.modal}],
          },
        ]}>
        <View style={styles.indicator} />

        <Text style={styles.title}>Atenção!</Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          massa odio. Quisque ante sem, tempor eget massa vel, mollis tincidunt
          metus. Ut sed felis lectus.
        </Text>
      </Animated.View>

      <TouchableOpacity style={styles.btn} onPress={close}>
        <Text style={{color: '#fff'}}>Close</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '75%',
    backgroundColor: 'rgba(8, 8, 8, 0.9)',
    position: 'absolute',
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  title: {
    marginTop: 50,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    color: '#fff',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#750505',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    position: 'absolute',
  },
});

export default Modal;
