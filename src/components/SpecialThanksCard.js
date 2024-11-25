import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SpecialThanksCard = () => (
  <View style={styles.specialThanksCard}>
    <Text style={styles.specialThanksTitle}>Special thanks</Text>
    <Text style={styles.specialThanksSubtitle}>to Yossi Mandy Lerman</Text>
    <Text style={styles.specialThanksDescription}>
      Thanks to his generous donation, we can study in “Shiurim” today.
    </Text>
    <TouchableOpacity style={styles.readMoreButton}>
      <Text style={styles.readMoreText}>Read more</Text>
      <MaterialIcons name="arrow-forward" size={16} color="#FF6F61" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  specialThanksCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android
    marginBottom: 20,
  },
  specialThanksTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF6F61',
    textAlign: 'center',
  },
  specialThanksSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  specialThanksDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6F61',
    alignSelf: 'center',
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6F61',
    marginRight: 5,
  },
});

export default SpecialThanksCard;
