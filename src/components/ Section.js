import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Section = ({ title, viewMore, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {viewMore && <Text style={styles.viewMore}>View more</Text>}
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMore: {
    color: '#4A90E2',
  },
});

export default Section;
