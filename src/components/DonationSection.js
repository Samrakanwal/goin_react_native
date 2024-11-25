import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DonationSection = () => (
  <View style={styles.donationCard}>
    <Text style={styles.donationText}>
      Help other Jews illuminate their lives by studying the Torah
    </Text>
    <TouchableOpacity style={styles.shareButton}>
      <Text style={styles.shareButtonText}>Share Shiurim</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.donationButton}>
      <Text style={styles.donationButtonText}>Donation</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  donationCard: {
    backgroundColor: '#0A1F44',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  donationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  donationButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  donationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DonationSection;
