import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Label, TextInput } from '../components/common/Form';
import {
  HeadingThree,
  HeadingTwo,
  Icon,
  PrimaryButton,
  Text,
} from '../components/common';
import { COLORS, SIZES } from '../constants/theme';
import { AuthNavigationProps } from '../navigation/types';

const SignIn = ({ navigation }: AuthNavigationProps<'SighIn'>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.welcomeMsg}>
            <HeadingThree style={{ color: COLORS.netural }}>
              Welcome Back!
            </HeadingThree>
            <Text style={{ fontSize: SIZES.small, color: COLORS.neturalLight }}>
              Let’s login to continues where you left
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 40,
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
              <Label style={{ marginBottom: 5 }}>Email or Username</Label>
              <TextInput placeholder="Email or Username" />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Password</Label>
              <TextInput placeholder="Password" type="password" />
            </View>
          </View>
          <PrimaryButton>Sign In</PrimaryButton>
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <Text>Dont have an account, </Text>
            <Pressable
              onPress={() => navigation.navigate('SignUp')}
              style={({ pressed }) => [
                { backgroundColor: pressed ? '#eee' : '#fff' },
              ]}
            >
              <Text bold style={{ color: COLORS.tertiary }}>
                Sign Up
              </Text>
            </Pressable>
          </View>
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

export default SignIn;
