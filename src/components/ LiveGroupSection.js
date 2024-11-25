import React from 'react';
import Section from './Section';
import LiveGroupCard from './LiveGroupCard';

const LiveGroupSection = ({ liveGroupData }) => (
  <Section title="Live group discussion" viewMore>
    {liveGroupData.map((item, index) => (
      <LiveGroupCard
        key={index}
        title={item.title}
        description={item.description}
        author={item.author}
        attendees={item.attendees}
        isLive={item.isLive}
        liveBadgeCount={item.liveBadgeCount}
      />
    ))}
  </Section>
);

export default LiveGroupSection;
