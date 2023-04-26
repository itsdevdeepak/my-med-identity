import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { HeadingTwo, QuickNavigationCard } from '../common';
import { COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';

const quickNavigationStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: COLORS.netural,
  },
  navigationCards: {},
});

const data = [
  { name: 'Add Lab Test' },
  { name: 'Add Medical Record' },
  { name: 'Search Records' },
];

const QuickNavigation = () => {
  const navigation = useNavigation<TabNavigationProps<'Home'>['navigation']>();
  return (
    <View style={quickNavigationStyles.container}>
      <HeadingTwo bold style={quickNavigationStyles.heading}>
        Quick Navigation
      </HeadingTwo>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <QuickNavigationCard
            onPress={() => navigation.navigate('Records')}
            cardTitle={item.name}
            icon={'file'}
          />
        )}
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export { QuickNavigation };
