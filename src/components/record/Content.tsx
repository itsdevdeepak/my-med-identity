import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { RecordType } from './types';
import { Button, HeadingTwo, Tag, Text } from '../common';
import { COLORS } from '../../constants/theme';

const contentStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    color: COLORS.netural,
    lineHeight: 25,
  },
  tagName: {
    lineHeight: 25,
    color: COLORS.neturalLight,
  },
  description: {
    color: COLORS.neturalDark,
    marginBottom: 15,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 15,
  },
  tagTitle: {
    color: COLORS.netural,
    textAlignVertical: 'center',
  },
  imageContainer: {
    minHeight: 400,
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 15,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});

const Content = ({
  name,
  allergies,
  tagName,
  discription,
  reportUrl,
}: RecordType) => {
  return (
    <View style={contentStyles.container}>
      <View style={{ marginBottom: 10 }}>
        <HeadingTwo bold style={contentStyles.name}>
          {name}
        </HeadingTwo>
        <Text style={contentStyles.tagName}>{tagName}</Text>
      </View>
      <Text style={contentStyles.description}>{discription}</Text>
      <View style={contentStyles.tags}>
        <Text bold style={contentStyles.tagTitle}>
          Allergies
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {allergies.map((allergie, index) => (
              <Tag
                textColor="#fff"
                style={{ backgroundColor: COLORS.tertiary }}
                key={index}
              >
                {allergie}
              </Tag>
            ))}
          </View>
        </ScrollView>
      </View>
      {reportUrl && (
        <View style={contentStyles.imageContainer}>
          <Image source={{ uri: reportUrl }} />
        </View>
      )}
      <View style={contentStyles.buttons}>
        <Button style={{ flex: 1 }}>View Report</Button>
        <Button style={{ flex: 5 }}>Download Report</Button>
      </View>
    </View>
  );
};

export { Content };
