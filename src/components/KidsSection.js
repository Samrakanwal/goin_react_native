import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const KidsCard = ({ image, title, subtitle, sessions }) => (
  <View style={styles.kidsCard}>
    <Image source={{ uri: image }} style={styles.kidsImage} />
    <View style={styles.kidsContent}>
      <Text style={styles.kidsTitle}>{title}</Text>
      <Text style={styles.kidsSubtitle}>{subtitle}</Text>
      <View style={styles.kidsFooter}>
        <View style={styles.kidsSessions}>
          <MaterialIcons name="bookmark-border" size={16} color="#4A4A4A" />
          <Text style={styles.kidsSessionsText}>{sessions} session</Text>
        </View>
        <TouchableOpacity style={styles.kidsReadButton}>
          <Text style={styles.kidsReadText}>Read</Text>
          <MaterialIcons name="arrow-forward" size={16} color="#FF6F61" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  kidsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android
  },
  kidsImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 10,
  },
  kidsContent: {
    flex: 1,
  },
  kidsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  kidsSubtitle: {
    fontSize: 14,
    color: '#8E8E8E',
    marginVertical: 5,
  },
  kidsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kidsSessions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kidsSessionsText: {
    fontSize: 12,
    marginLeft: 5,
    color: '#4A4A4A',
  },
  kidsReadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kidsReadText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginRight: 5,
  },
});

export default KidsCard;
