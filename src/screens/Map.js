import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import Modal from 'react-native-modal';
import tailwind from 'twrnc';
import data from "../data/data.json"

const Map = ({ navigation }) => {
  const [selectedModalType, setSelectedModalType] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const initialRegion = {
    latitude: 42.653640,
    longitude: 21.146965,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };

  const handleMoreDetailsPress = () => {
    if (selectedMarker) {
      // Navigate to the Details screen with the selected marker data
      navigation.navigate('Details', { marker: selectedMarker });
    }
  };

  const handleMapTypeChange = (type) => {
    setSelectedModalType(type);
    setModalVisible(false);
  };

  return (
    <View style={tailwind`flex-1`}>
      <MapView
        style={tailwind`flex-1`}
        initialRegion={initialRegion}
        provider="google"
      >
        {/* Render multiple markers */}
        {data.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            title={marker.name}
            description={marker.desc}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}

        {/* Globe view */}
        {selectedModalType === 'globe' && (
          <UrlTile
            urlTemplate="https://your-globe-texture-url/{z}/{x}/{y}.png"
            zIndex={-1}
          />
        )}
      </MapView>

      {selectedMarker && (
        <View style={tailwind`absolute bottom-0 left-0 right-0 p-4 bg-white`}>
          <Text>{selectedMarker.name}</Text>
          <Text>{selectedMarker.desc}</Text>
          <TouchableOpacity onPress={handleMoreDetailsPress}>
            <Text style={tailwind`text-blue-500 text-base`}>See more details</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={tailwind`absolute top-10 right-10`}>
        {/* Button to open the modal */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={tailwind`text-white bg-blue-500 p-2 rounded`}>Map Type</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for selecting map type */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={tailwind`bg-white p-4`}>
          <TouchableOpacity onPress={() => handleMapTypeChange('standard')}>
            <Text style={tailwind`text-black`}>Standard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMapTypeChange('satellite')}>
            <Text style={tailwind`text-black`}>Satellite</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMapTypeChange('hybrid')}>
            <Text style={tailwind`text-black`}>Hybrid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMapTypeChange('globe')}>
            <Text style={tailwind`text-black`}>Globe</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Map;
