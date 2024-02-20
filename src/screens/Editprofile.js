import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Editprofile() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 16 }}>
      {/* Top Bar */}
      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>EDIT PROFILE</Text>
      </View>

      {/* Profile Picture */}
      <View style={{ alignItems: 'center', paddingTop: 32, paddingBottom: 16 }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../assets/picprofile.jpg')}
            style={{ width: 105, height: 105, borderRadius: 48, borderWidth: 4, borderColor: '#fff' }} />
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12, fontWeight: 'bold', marginTop: 20 }}>Change Picture</Text>
        </View>
      </View>

      {/* Form Fields */}
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginBottom: 16, width: '70%' }}>
          <Text style={{ fontSize: 14, color: '#8a8a8a' }}>Full Name</Text>
          <TextInput
            defaultValue="Juan Dela Cruz"
            style={{ height: 40, backgroundColor: '#474241', borderRadius: 8, paddingHorizontal: 12, marginTop: 4, color: 'white' }}
          />
        </View>

        <View style={{ marginBottom: 16, width: '70%' }}>
          <Text style={{ fontSize: 14, color: '#8a8a8a' }}>Username</Text>
          <TextInput
            defaultValue="juandc4545"
            style={{ height: 40, backgroundColor: '#474241', borderRadius: 8, paddingHorizontal: 12, marginTop: 4, color: 'white' }}
          />
        </View>

        <View style={{ marginBottom: 16, width: '70%' }}>
          <Text style={{ fontSize: 14, color: '#8a8a8a' }}>Email</Text>
          <TextInput
            defaultValue="juandelacruz@email.com"
            style={{ height: 40, backgroundColor: '#474241', borderRadius: 8, paddingHorizontal: 12, marginTop: 4, color: 'white' }}
          />
        </View>

        <View style={{ marginBottom: 16, width: '70%' }}>
          <Text style={{ fontSize: 14, color: '#8a8a8a' }}>Phone Number</Text>
          <TextInput
            defaultValue="09294452980"
            style={{ height: 40, backgroundColor: '#474241', borderRadius: 8, paddingHorizontal: 12, marginTop: 4, color: 'white' }}
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity style={{ backgroundColor: '#149e14', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: '40%' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>SAVE CHANGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
