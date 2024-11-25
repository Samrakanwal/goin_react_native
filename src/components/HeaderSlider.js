import React from 'react';
import { View, FlatList, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderSlider = ({ slides }) => {
  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.slide}
            imageStyle={styles.imageBackground}
          >
            <View style={styles.slideContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.hebrew}>{item.hebrew}</Text>
            </View>
          </ImageBackground>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    marginBottom: 20,
  },
  slide: {
    width: width - 40,
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  imageBackground: {
    borderRadius: 15,
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  hebrew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HeaderSlider;
