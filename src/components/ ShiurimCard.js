import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ShiurimCard = ({ title, progress, time, image }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.cardBackground}
        imageStyle={styles.cardBackgroundImage}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: progress }]} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardProgressText}>{progress}</Text>
        <View style={styles.cardTime}>
          <MaterialIcons name="access-time" size={16} color="#4A4A4A" />
          <Text style={styles.cardTimeText}>{time}</Text>
        </View>
      </View>
    </View>
    <Text style={styles.cardLabel}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: { marginHorizontal: 10, alignItems: 'center', width: 160 },
  card: { backgroundColor: '#E8EAF6', borderRadius: 10, overflow: 'hidden', marginBottom: 10, width: '100%' },
  cardBackground: { height: 120, justifyContent: 'center', alignItems: 'center' },
  progressContainer: { height: 5, width: '80%', backgroundColor: '#DADADA', borderRadius: 10, alignSelf: 'center', marginTop: 10 },
  progressBar: { height: '100%', backgroundColor: '#4CAF50', borderRadius: 10 },
  cardLabel: { fontSize: 14, fontWeight: 'bold', color: '#4A4A4A', marginBottom: 5, textAlign: 'center' },
});

export default ShiurimCard;
