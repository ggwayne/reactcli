import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const Profile = () => {
  const navigation = useNavigation();

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

  const handleEditProfile = () => {
    navigation.replace('Editprofile');
  };

  const handleSettings = () => {
    // navigation.navigate('Settings');
  };

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.heading]}>PROFILE</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>
          
          <Text style={styles.fullName}>Juan Dela Cruz</Text>

          <Text style={styles.labelP}>Username:</Text>
          <Text style={styles.infoP}>juandc4545</Text>

          <Text style={styles.labelP}>Email:</Text>
          <Text style={styles.infoP}>juandelacruz@email.com</Text>

          <Text style={styles.labelP}>Phone Number:</Text>
          <Text style={styles.infoP}>09294452980</Text>

          <TouchableOpacity style={styles.buttonEditProfile} onPress={handleEditProfile}>
            <Text style={styles.buttonTextP}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonP} onPress={handleSettings}>
            <Text style={styles.settingsButtonTextP}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonP} onPress={handleLogout}>
            <Text style={styles.logoutButtonTextP}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  fullName: {
      fontFamily: 'DMSans',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 30,
  },
  heading: {
    marginBottom: 20,
    fontSize: 40,
    fontFamily:'ArchivoBlack'
    
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30
  },
  profileInfo: {
   
    alignItems: 'center',
    marginBottom: 15,
  },
  labelP: {
    fontSize: 12,
    marginBottom: 5,
    color: '#8a8a8a',
    textAlign: 'left',
    paddingLeft: 120,
    paddingTop: 5,
    alignSelf: 'flex-start', // Add this line
    width: '100%', // Add this line
  },
  
  infoP: {
    fontSize: 14,
    fontFamily: 'Poppins',
    marginBottom: 15,
    color: 'white',
    textAlign: 'left',
    paddingLeft: 140,
    alignSelf: 'flex-start', // Add this line
    width: '100%', 
    
  },
  buttonEditProfile: {
    marginTop:50,
    backgroundColor: '#86868678',
    padding: 8,
    borderRadius: 3,
    width: 150,
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 20
  },
  buttonP: {
    backgroundColor: '#5555555c',
    padding: 10,
    borderRadius: 0,
    width: 420,
    alignItems: 'center',
    marginVertical: 3,
  },
  buttonTextP: {
    fontFamily: 'DMSans',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  
  logoutButtonTextP: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 14,
  },
  settingsButtonTextP: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 14,
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
});

export default Profile;
