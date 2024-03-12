import React, { useState } from 'react';
import { StatusBar, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

// Update image imports to directly reference image files
import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

import Levels from '../screens/Homepage';
import Login from '../screens/Login';

const Control = () => {
  const navigation = useNavigation(); // Assuming you're using React Navigation

  const navigateToScreen1 = () => {
    //navigation.navigate('Levels');
  };

  const navigateToScreen2 = () => {
    navigation.replace('ScreenControl');
  };

  const navigateToScreen3 = () => {
    navigation.replace('ScreenUpdates');
  };

  const navigateToScreen4 = () => {
    navigation.replace('ScreenProfile');
  };

    // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button toggle
  const handleButtonToggle = (buttonNumber) => {
    // If the clicked button is already active, turn it off
    if (activeButton === buttonNumber) {
      setActiveButton(null);
    } else {
      // If there is an active button, do nothing
      if (activeButton !== null) {
        return;
      }
      // Turn on the clicked button
      setActiveButton(buttonNumber);
    }
  };

  // Function to determine if a button is active
  const isButtonActive = (buttonNumber) => {
    return activeButton === buttonNumber;
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* Control Title */}
      <Text style={[styles.title, styles.heading]}>CONTROL</Text>

      {/* User Profile Information */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>
          {/* Grouped Buttons with Title */}
          <View style={styles.buttonSection}>
            <Text style={styles.sectionTitle}>Valves</Text>
            <View style={styles.line}></View>

            {/* Label and Toggle Button 1 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Valve 1A </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(1)}
                style={[
                  styles.buttonP,
                  isButtonActive(1) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(1) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button 2 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Valve 1B </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(2)}
                style={[
                  styles.buttonP,
                  isButtonActive(2) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(2) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button 3 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Valve 2A </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(3)}
                style={[
                  styles.buttonP,
                  isButtonActive(3) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(3) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button 4 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Valve 2B </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(4)}
                style={[
                  styles.buttonP,
                  isButtonActive(4) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(4) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Grouped Buttons with Title */}
          <View style={styles.buttonSection}>
            <Text style={styles.sectionTitle}>Pumps</Text>
            <View style={styles.line}></View>
            {/* Label and Toggle Button pH UP */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>pH Up      </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(5)}
                style={[
                  styles.buttonP,
                  isButtonActive(5) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(5) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button pH DOWN */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>pH Down</Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(6)}
                style={[
                  styles.buttonP,
                  isButtonActive(6) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(6) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button Nutrients */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Nutrients </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(7)}
                style={[
                  styles.buttonP,
                  isButtonActive(7) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(7) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    backgroundColor: 'black',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    position: 'absolute',
    top: 0,
    paddingTop:20,
    color: 'white',
    left: 25, // Adjust left positioning as needed
  },
  heading: {
    marginBottom: 20,
    fontSize: 40,
    fontFamily:'ArchivoBlack'
    
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },

  profilePicture: {
    width: 80, // Adjust the size of the profile picture as needed
    height: 80,
    borderRadius: 40, // Half of the width or height to make it circular
    marginBottom: 10,
  },

  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  labelP: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoP: {
    fontSize: 14,
    marginBottom: 15,
  },
  buttonP: {
    backgroundColor: 'green',
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 30, // Adjust horizontal padding
    borderRadius: 20, // Adjust border radius
    alignItems: 'center',
    marginVertical: 5,
   
  },
  buttonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButtonP: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, // Adjust as needed to control the spacing between the icon and text
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
    borderTopLeftRadius: 40, // Adjust top left border radius
    borderTopRightRadius: 40, 
  },
  bottomNavButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNavButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },

  line: {
    width: 300, // Adjust the width of the line as needed
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom:10,
  },
  sectionTitle: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 10,
    color: 'white',
    
  },

  labelAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    fontFamily:'DMSans',
    fontSize: 20,
    marginRight: 10,
    color: 'white',
    width: 120, // Adjust the width of the label text
  },

  buttonSection: {
    marginBottom: 20,
  },

  buttonOn: {
    backgroundColor: 'lightgreen',
  },
  buttonOff: {
    backgroundColor: 'gray',
  },
});

export default Control;
