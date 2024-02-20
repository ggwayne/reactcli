import React, { useState } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'; // Adjusted import for StatusBar
import { useNavigation } from '@react-navigation/native'; // Assuming you have React Navigation set up
import CircularProgress from 'react-native-circular-progress-indicator';

import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const Levels = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    navigation.navigate('ScreenLevels');
  };

  const navigateToScreen2 = () => {
    navigation.navigate('ScreenControl');
  };

  const navigateToScreen3 = () => {
    navigation.navigate('ScreenUpdates');
  };

  const navigateToScreen4 = () => {
    navigation.navigate('ScreenProfile');
  };


  const progress1 = 0.9;
  const progress2 = 0.69;
  const progress3 = 0.25;
  const progress4 = 0.33;

  const progressRes = 0.5;

  const pHUP = 0.9;
  const pHDOWN = 0.3;
  const nutrient = 0.61;

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* Header */}
      <Text style={[styles.title, styles.heading]}>LEVELS</Text>

      {/* Background Rectangle */}
      <View style={styles.backgroundRectangle} />
      
      {/* Circles */}
      <CircularProgress value={58}/>
      {/* Background Rectangle for reservoir */}
      <View style={styles.backgroundRectangleReser} />
      

      {/* Circles */}


      {/* Background Rectangle for dosers*/}
      <View style={styles.backgroundRectangleDos}>
        {/* Vertical Bar Graph Progress Bar for dosers */}
        
      </View>


      {/* User Profile Information */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>{/* Add profile information UI here */}</View>
      </ScrollView>

      {/* Bottom Navigation Inside appContainer */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={navigateToScreen1} style={styles.bottomNavButton}>
          <Image source={levelsIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>LEVELS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen2} style={styles.bottomNavButton}>
          <Image source={controlIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>CONTROL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen3} style={styles.bottomNavButton}>
          <Image source={updatesIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>UPDATES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen4} style={styles.bottomNavButton}>
          <Image source={profileIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      },
      backgroundRectangle: {
        position: 'absolute',
        top: 100,
        left: '20%',
        transform: [{ translateX: -60 }],
        width: 370,
        height: 300,
        backgroundColor: 'lightgray',
        zIndex: -1,
        borderRadius: 10,
        padding: 20,
      },
      backgroundRectangleReser:{
        position: 'absolute',
        top: 450,
        left: '20%', // Center the rectangle horizontally
        transform: [{ translateX: -60 }], // Adjust the translation based on the rectangle's width
        width: 180,
        height: 250, // Adjust the height based on your design
        backgroundColor: 'lightgray',
        zIndex: -1,
        borderRadius: 10,
      },
    
      backgroundRectangleDos:{
        position: 'absolute',
        top: 450,
        left: '65%', // Center the rectangle horizontally
        transform: [{ translateX: -60 }], // Adjust the translation based on the rectangle's width
        width: 180,
        height: 250, // Adjust the height based on your design
        backgroundColor: 'lightgray',
        zIndex: -1,
        borderRadius: 10,
      },
    
      verticalProgressPhUP: {
        position: 'absolute',
        bottom: 0,
        left: '60%', // Adjust the position as needed
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 250,
      },
    
    
      verticalProgressPhDOWN: {
        position: 'absolute',
        bottom: 0,
        left: '95%', // Adjust the position as needed
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 250,
      },
    
    
      verticalProgressNutrient: {
        position: 'absolute',
        bottom: 0,
        left: '128%', // Adjust the position as needed
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 250,
      },
      backgroundTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: -50,
        marginLeft: -230,
        marginTop: 20
      },
    
      backgroundTitleRes: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: -50,
        marginLeft: -70,
        marginTop: 40
      },
    
      circlesContainerRes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,  // Add margin from the top if needed
      },
      progressTextRes: {
        position: 'absolute',
        top: '35%',
        left: '47%',
        transform: [{ translateX: -80}, { translateY: -10 }], // Adjust based on the desired positioning
        color: 'white',
        fontSize: 40,
        fontWeight: 'regular',
        zIndex: 0, // Place it above the circle
      },
      progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        //right: '50%',
        transform: [{ translateX: -8 }, { translateY: -6 }], // Adjust based on the desired positioning
        color: 'white',
        fontSize: 20,
        fontWeight: 'regular',
        zIndex: 1, // Place it above the circle
      },
      circlesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,  // Adjust the distance from the content below
        marginTop: 75,  // Add margin from the top if needed
      },
      circleTitle: {
        position: 'absolute',
        top: '15%',
        left: '40%',
        transform: [{ translateX: -20 }, { translateY: -10 }],  // Adjust based on the desired positioning
        color: 'black',
        fontSize: 12,
        fontWeight: 'regular',
        zIndex: 1,  // Place it above the circle
      },
      contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        color: 'white'
      },
      heading: {
        fontSize: 25,
      },
      profileInfo: {
        alignItems: 'center',
        marginBottom: 20,
      },
      bottomNavIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
      },
      bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
      },
      bottomNavButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
      },
      bottomNavButtonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
      },
});

export default Levels;
