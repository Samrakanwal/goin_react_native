import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NigunimCard = ({ title, subtitle, sessions, image }) => (
  <View style={styles.nigunimCard}>
    {/* Image Section */}
    <ImageBackground
      source={{ uri: image }}
      style={styles.nigunimImage}
      imageStyle={styles.nigunimImageBackground}
    >
      <View style={styles.overlay} />
    </ImageBackground>

    {/* Content Section */}
    <View style={styles.nigunimContent}>
      <View style={styles.nigunimTitleContainer}>
        <MaterialIcons name="music-note" size={18} color="#4A4A4A" />
        <Text style={styles.nigunimTitle}>{title}</Text>
      </View>
      <Text style={styles.nigunimSubtitle}>{subtitle}</Text>
      <View style={styles.nigunimSessionContainer}>
        <MaterialIcons name="bookmark-border" size={16} color="#4A4A4A" />
        <Text style={styles.nigunimSessionText}>{sessions} session</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  nigunimCard: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android
  },
  nigunimImage: {
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nigunimImageBackground: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nigunimContent: {
    padding: 10,
  },
  nigunimTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nigunimTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginLeft: 5,
  },
  nigunimSubtitle: {
    fontSize: 14,
    color: '#8E8E8E',
    marginBottom: 10,
  },
  nigunimSessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nigunimSessionText: {
    fontSize: 14,
    color: '#4A4A4A',
    marginLeft: 5,
  },
});

export default NigunimCard;
