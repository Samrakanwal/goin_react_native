import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteCard = () => (
  <View style={styles.quoteCard}>
    <Text style={styles.quoteText}>
      In that era, there will be neither famine or war, envy or competition,
      for good will flow in abundance and all the delights will be freely available as dust.
      The occupation of the entire world will be solely to know G-d.
    </Text>
    <Text style={styles.quoteAuthor}>- Mishneh Tarah</Text>
  </View>
);

const styles = StyleSheet.create({
  quoteCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginHorizontal: 20, marginTop: 30 },
  quoteText: { fontSize: 16, color: '#333', lineHeight: 24, marginBottom: 10 },
  quoteAuthor: { fontSize: 16, color: '#333', fontWeight: 'bold', textAlign: 'right', marginTop: 10 },
});

export default QuoteCard;
