import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeaderSlider from '../components/HeaderSlider';
import QuickAccess from '../components/ QuickAccess';

import ShiurimCard from '../components/ ShiurimCard';
import QuoteCard from '../components/QuoteCard';

import LiveGroupSection from '../components/ LiveGroupSection';
import KidsSection from '../components/KidsSection';
import DonationAndThanksSection from '../components/DonationAndThanksSection';
import NigunimSection from '../components/ NigunimSection';
import Section from '../components/ Section';

// Sample Data
const slides = [
  {
    title: 'Morning prayer',
    date: '20.10.2022',
    hebrew: 'יום שבח ה׳',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhePaFYXqm8FfSWXIJUVZWAayHdDU2mnSdIkRhfqrTbgy3r6faotv-Pqcm79QZVf43yw&usqp=CAU',
  },
  {
    title: 'Evening prayer',
    date: '21.10.2022',
    hebrew: 'יום של מנוחה',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhePaFYXqm8FfSWXIJUVZWAayHdDU2mnSdIkRhfqrTbgy3r6faotv-Pqcm79QZVf43yw&usqp=CAU',
  },
  {
    title: 'Special prayer',
    date: '22.10.2022',
    hebrew: 'יום מיוחד של הודיה',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhePaFYXqm8FfSWXIJUVZWAayHdDU2mnSdIkRhfqrTbgy3r6faotv-Pqcm79QZVf43yw&usqp=CAU',
  },
];

const quickAccessIcons = [
  { label: 'Download', name: 'file-download', icon: require('react-native-vector-icons/MaterialIcons').default },
  { label: 'Routine', name: 'schedule', icon: require('react-native-vector-icons/MaterialIcons').default },
  { label: 'Favorites', name: 'star', icon: require('react-native-vector-icons/FontAwesome5').default },
  { label: 'Recents', name: 'history', icon: require('react-native-vector-icons/FontAwesome5').default },
];

const shiurimData = [
  {
    title: 'Jumash',
    progress: '8%',
    time: '4 min',
    image: 'https://media.istockphoto.com/id/1452775956/vector/tech-background-big-data-concept-with-triangles-dark-modern-wallpaper-abstract-futuristic.jpg',
  },
  {
    title: 'Tania',
    progress: '25%',
    time: '10 min',
    image: 'https://media.istockphoto.com/id/1350046657/photo/dark-green-defocused-blurred-motion-abstract-background.jpg',
  },
  {
    title: 'Rambam',
    progress: '100%',
    time: '2 hrs 30 min',
    image: 'https://media.istockphoto.com/id/1452775956/vector/tech-background-big-data-concept-with-triangles-dark-modern-wallpaper-abstract-futuristic.jpg',
  },
  {
    title: 'Hayom Iom',
    progress: '100%',
    time: '1 hr 55 min',
    image: 'https://media.istockphoto.com/id/1350046657/photo/dark-green-defocused-blurred-motion-abstract-background.jpg',
  },
];

const nigunimData = [
  {
    title: 'Calm Jewish',
    subtitle: 'to relax',
    sessions: '43',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYs35MbTk0ToNAQSZE3fQ31HyySii9o76nZWs9r0NApmI5jdYNXYyUhCY8S1CiEUj1rww&usqp=CAU',
  },
  {
    title: 'Chabad Nigunim',
    subtitle: 'chabad music',
    sessions: '43',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAoOfd9ZXkA5pWg321SVMzL9DElcltJY99AjQz6m_jgbnS47gIw23rj26ezOZwrc8fgo&usqp=CAU',
  },
];

const liveGroupData = [
  {
    title: 'Lorem ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    author: 'Rebba',
    attendees: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-UADW51ujXijbxeywSOoXBteR-PdoDn2E2dhLSOtTJScErM1YfoFZxjFVGUCu5NKBMc&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2-pYh4nh9D0eN_WakdWye0bClDrieZpIxDrKUxZoBZ7nF15WFF6Li1pw_MqF73RXw8Q&usqp=CAU',
    ],
    isLive: true,
    liveBadgeCount: 3,
  },
  {
    title: 'Lorem ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    author: 'Rebba',
    attendees: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-UADW51ujXijbxeywSOoXBteR-PdoDn2E2dhLSOtTJScErM1YfoFZxjFVGUCu5NKBMc&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2-pYh4nh9D0eN_WakdWye0bClDrieZpIxDrKUxZoBZ7nF15WFF6Li1pw_MqF73RXw8Q&usqp=CAU',
    ],
    isLive: true,
    liveBadgeCount: 5,
  },
];

const kidsData = [
  {
    image: 'https://wallpapers.com/images/featured/cartoon-pictures-q3hxkk0gmw6vnivj.jpg',
    title: 'Moises',
    subtitle: 'the story of',
    sessions: '43',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypb9JKhZ2zCni928TqO_0aHGSWxvJ9GUK2gXovKiYdkKUO2Ij1X8hmjIBWJBKYHKFU8s&usqp=CAU',
    title: 'Exodus',
    subtitle: 'the Exodus from Egypt',
    sessions: '21',
  },
];

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    {/* Header Slider */}
    <HeaderSlider slides={slides} />

    {/* Quick Access */}
    <QuickAccess icons={quickAccessIcons} />

    {/* Shiurim Section */}
    <Section title="Shiurim (+50 Learn today)" viewMore>
      {shiurimData.map((item) => (
        <ShiurimCard
          key={item.title}
          title={item.title}
          progress={item.progress}
          time={item.time}
          image={item.image}
        />
      ))}
    </Section>

    {/* Quote Card */}
    <QuoteCard />

    {/* Nigunim Section */}
    <NigunimSection nigunimData={nigunimData} />

    {/* Live Group Discussion Section */}
    <LiveGroupSection liveGroupData={liveGroupData} />

    {/* Kids Section */}
    <KidsSection kidsData={kidsData} />

    {/* Donation and Thanks Section */}
    <DonationAndThanksSection />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default HomeScreen;
