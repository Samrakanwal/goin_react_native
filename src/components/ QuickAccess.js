import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuickAccess = ({ icons }) => {
  return (
    <View style={styles.quickIcons}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} style={styles.iconWrapper}>
          <View style={styles.iconBackground}>
            <icon.icon name={icon.name} size={25} color="#000" />
          </View>
          <Text style={styles.iconLabel}>{icon.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  quickIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default QuickAccess;
