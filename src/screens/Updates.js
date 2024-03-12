import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Assume you have some icon images in the assets folder
import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const Updates = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    //navigation.navigate('Levels');
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

  const beforepH = 7;
  const afterpH = 6.3;

  const beforeNutrients = 400;
  const afterNutrients = 750;

  const notifications = [
    'Log 1: Tank 1 is full',
    'Log 2: Switched to rainwater',
    'Log 3: Nutrients Added',
    'Log 4: Tank 1 is full',
    'Log 5: Switched to rainwater',
    'Log 6: Nutrients Added',
    'Log 7: Tank 1 is full',
    'Log 8: Switched to rainwater',
    'Log 9: Nutrients Added',
    'Log 10: Tank 1 is full',
    'Log 11: Switched to rainwater',
    'Log 12: Nutrients Added',
    'Log 4: Tank 1 is full',
    'Log 5: Switched to rainwater',
    'Log 6: Nutrients Added',
    'Log 7: Tank 1 is full',
    'Log 8: Switched to rainwater',
    'Log 9: Nutrients Added',
  ];

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.heading]}>UPDATES</Text>

      <View style={styles.reservoirContainer}>
  <Text style={styles.reservoirReadings}>Reservoir Readings</Text>
 
</View>
<View style={styles.line}></View>
<Text style={styles.label}>  pH                      Nutrients </Text>
<Text style={styles.labelNutrients}> pH Reading</Text>
      {/* Rectangles in the same row with space between them */}
      <View style={styles.rowContainer}>
        {/* Rectangle 1 */}
        <View style={styles.rectangle1}>
          
          {/* Your content for Rectangle 1 goes here */}
          <Text style={styles.rectangleTextBefore}>Before: {(beforepH)}pH</Text>
          <Text style={styles.rectangleTextAfter}>After: {(afterpH)}pH</Text>
        </View>

        {/* Space between rectangles */}
        <View style={{ width: 10 }} />

        {/* Rectangle 2 */}
        <View style={styles.rectangle2}>
          {/* Your content for Rectangle 2 goes here */}
          <Text style={styles.rectangleTextBefore}>     Before: {(beforeNutrients)}ppm</Text>
          <Text style={styles.rectangleTextAfter}>  After: {(afterNutrients)}ppm</Text>
        </View>
      </View>

      <Text style={styles.updates}>Updates</Text>
      <View style={styles.line}></View>
      <Text style={styles.today}>Today</Text>

      {/* List of notifications */}
      <ScrollView style={[styles.scrollView, { marginBottom: 100 }]}>
        {notifications.map((notification, index) => (
          <Text key={index} style={styles.notificationItem}>
            {notification}
          </Text>
        ))}
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Adjust as needed
  },
  rectangle1: {
    width: 180,
    height: 150,
    backgroundColor: '#00800099',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-110,
    borderRadius: 10,
  },
  rectangleTextBefore: {
    color: 'white',
    marginLeft: -50,
    fontSize: 17,
  },
  rectangleTextAfter: {
    color: 'white',
    marginLeft: -10,
    fontSize: 23,
    fontWeight: 'bold',
  },
  rectangle2: {
    width: 180,
    height: 150,
    backgroundColor: '#ffff4384',
    alignItems: 'center',
    marginTop: -110,
    justifyContent: 'center',
    borderRadius: 10,
  },
  reservoirContainer: {
    marginTop: 50, // Adjust as needed
  },
  
  scrollView: {
    fadingEdgeLength: 0,
    flex: 1,
    marginBottom: 20,
  },
  notificationItem: {
    fontSize: 16,
    color: 'white',
    marginVertical: 8,
    marginLeft: 16,
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

  label: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 23,
    marginTop:20,
    left: 10,
    color: 'white',
  },

  labelpH: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 20,
    right: 100,
    color: 'white',
  },

  today: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 20,
    right: 110,
    marginTop: 0,
    marginBottom: 5,
    color: 'white',
  },
  updates: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 28,
    right: 110,
    marginTop: 28,
    marginBottom: 5,
    color: 'white',
  },

  reservoirReadings: {
    fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 28,
    right: 40,
    marginTop: 28,
    marginBottom: 5,
    color: 'white',
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
  line: {
    width: 330, // Adjust the width of the line as needed
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom:10,
    marginTop:5,
  },
  bottomNavButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
});

export default Updates;
