import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Label, TextInput } from '../components/common/Form';
import {
  Button,
  HeadingThree,
  HeadingTwo,
  Icon,
  PrimaryButton,
  Text,
} from '../components/common';
import { COLORS, SIZES } from '../constants/theme';
import { AuthNavigationProps } from '../navigation/types';

const AdditionalDetails = ({
  navigation,
}: AuthNavigationProps<'AdditionalDetails'>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.welcomeMsg}>
            <HeadingThree style={{ color: COLORS.netural }}>
              Create a New Account
            </HeadingThree>
            <Text style={{ fontSize: SIZES.small, color: COLORS.neturalLight }}>
              Enter your details to explore the app
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 15,
              gap: 8,
            }}
          >
            <Icon
              name="healthBook"
              fill={COLORS.tertiary}
              width={50}
              height={50}
            />
            <HeadingTwo
              style={{ textAlignVertical: 'center', color: COLORS.tertiary }}
              bold
            >
              My Med Identity
            </HeadingTwo>
          </View>
          <View style={{ marginBottom: 15 }}>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Age</Label>
              <TextInput placeholder="Age" />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Blood Group</Label>
              <TextInput placeholder="Blood Group" />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Height</Label>
              <TextInput placeholder="Height" />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Weight</Label>
              <TextInput placeholder="Weight" />
            </View>
          </View>
          <Button
            onPress={() => 0}
            style={{ backgroundColor: COLORS.neturalLight, marginBottom: 15 }}
            underlayColor="#476170"
          >
            Skip for Now
          </Button>
          <PrimaryButton onPress={() => navigation.navigate('SignUp')}>
            Submit
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  content: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  welcomeMsg: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default AdditionalDetails;
