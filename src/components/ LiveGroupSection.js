import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LiveGroupCard = ({ title, description, author, attendees, isLive, liveBadgeCount }) => (
  <View style={styles.liveGroupCard}>
    {/* Header Section */}
    <View style={styles.liveGroupHeader}>
      <Text style={styles.liveGroupTitle}>{title}</Text>
      {isLive && (
        <View style={styles.liveBadge}>
          <View style={styles.liveIndicator} />
          <Text style={styles.liveBadgeText}>Live</Text>
        </View>
      )}
    </View>

    {/* Description */}
    <Text style={styles.liveGroupDescription}>{description}</Text>

    {/* Author */}
    <Text style={styles.liveGroupAuthor}>by {author}</Text>

    {/* Attendees */}
    <View style={styles.attendeesContainer}>
      <View style={styles.attendees}>
        {attendees.map((attendee, index) => (
          <Image
            key={index}
            source={{ uri: attendee }}
            style={[styles.attendeeImage, { zIndex: attendees.length - index }]}
          />
        ))}
      </View>
      <View style={styles.additionalAttendees}>
        <Text style={styles.additionalAttendeesText}>+{liveBadgeCount}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  liveGroupCard: {
    backgroundColor: '#F3F6FA',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android
  },
  liveGroupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  liveGroupTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Shadow for Android
  },
  liveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
    marginRight: 5,
  },
  liveBadgeText: {
    fontSize: 12,
    color: '#4A4A4A',
    fontWeight: '600',
  },
  liveGroupDescription: {
    fontSize: 14,
    color: '#4A4A4A',
    lineHeight: 20,
    marginBottom: 10,
  },
  liveGroupAuthor: {
    fontSize: 12,
    color: '#8E8E8E',
    marginBottom: 15,
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  attendees: {
    flexDirection: 'row',
  },
  attendeeImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#F3F6FA',
    marginLeft: -10,
  },
  additionalAttendees: {
    backgroundColor: '#FF6F61',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalAttendeesText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default LiveGroupCard;
