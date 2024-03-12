import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const [buttonColor, setButtonColor] = useState('#25d125');
  const navigation = useNavigation();

  const pressLogin = () => {
    navigation.replace('Login');
  };

  const pressRegister = () => {
    navigation.replace('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.appContainer}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={[styles.title, styles.heading]}>HydroAPP</Text>

        <TouchableOpacity onPress={pressLogin}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressRegister}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  appContainer: {
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 1,
    color: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34c034',
  },
  heading: {
    marginBottom: 1,
    fontSize: 30,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Homepage;
