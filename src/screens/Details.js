import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Details = ({ route }) => {
  const { marker } = route.params || {};

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    text: {
      fontSize: 16,
      marginBottom: 8,
    },
    centeredText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },
    image: {
      width: 360,
      height: 250,
      borderRadius: 8,
      marginBottom: 8,
    },
    dullBackground: {
      backgroundColor: '#EAEAEA',
      padding: 16,
      borderRadius: 8,
    },
    cardContainer: {
      marginTop: 12,
      padding: 12,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
    },
    cardText: {
      fontSize: 16,
      marginBottom: 8,
    },
    cardContainer: {
      marginTop: 12,
      padding: 22,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    cardLabel: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardValue: {
      fontSize: 16,
    },
    icon: {
      marginRight: 0,
    },
  });

  return (
    <View style={styles.container}>
      {marker ? (
        <>
          <Text style={styles.centeredText}>Name: {marker.name}</Text>
          <View style={styles.dullBackground}>
            {marker.images ? (
              <Image
                source={{ uri: marker.images }}
                style={styles.image}
                resizeMode="cover"
                onError={(error) => console.error("Image Error:", error)}
              />
            ) : (
              <Text style={styles.text}>No Image Available</Text>
            )}
            <Text style={styles.text}>Description: {marker.desc}</Text>
            <View style={styles.cardContainer}>
              <View style={styles.cardRow}>
                <Icon name="car" size={20} color="black" style={styles.icon} />
                <Text style={styles.cardLabel}>Parking:</Text>
                <Text style={styles.cardValue}>{marker.parking ? 'Yes' : 'No'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Icon name="snowflake-o" size={20} color="black" style={styles.icon} />
                <Text style={styles.cardLabel}>A/C:</Text>
                <Text style={styles.cardValue}>{marker.ac ? 'Yes' : 'No'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Icon name="home" size={20} color="black" style={styles.icon} />
                <Text style={styles.cardLabel}>Square Feet:</Text>
                <Text style={styles.cardValue}>{marker.squareFeet || 'N/A'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Icon name="tree" size={20} color="black" style={styles.icon} />
                <Text style={styles.cardLabel}>Outdoor:</Text>
                <Text style={styles.cardValue}>{marker.outdoor ? 'Yes' : 'No'}</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
    </View>
  );
};

export default Details;