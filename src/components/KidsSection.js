import React from 'react';
import Section from './Section';
import KidsCard from './KidsCard';

const KidsSection = ({ kidsData }) => (
  <Section title="Kids" viewMore>
    {kidsData.map((item, index) => (
      <KidsCard
        key={index}
        image={item.image}
        title={item.title}
        subtitle={item.subtitle}
        sessions={item.sessions}
      />
    ))}
  </Section>
);

export default KidsSection;
