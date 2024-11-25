import React from 'react';
import { FlatList } from 'react-native';
import NigunimCard from './NigunimCard';
import Section from './Section';

const NigunimSection = ({ nigunimData }) => (
  <Section title="Nigunim" viewMore>
    <FlatList
      data={nigunimData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <NigunimCard
          title={item.title}
          subtitle={item.subtitle}
          sessions={item.sessions}
          image={item.image}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </Section>
);

export default NigunimSection;
