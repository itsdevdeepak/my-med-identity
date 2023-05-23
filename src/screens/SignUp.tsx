import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Label, TextInput } from '../components/common/Form';
import {
  HeadingThree,
  HeadingTwo,
  Icon,
  InfoMsg,
  PrimaryButton,
  Text,
} from '../components/common';
import { COLORS, SIZES } from '../constants/theme';
import { AuthNavigationProps } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { ErrorMsg } from '../components/common/ErrorMsg';
import {
  isValidEmail,
  isValidPassword,
  isValidSSN,
} from '../utils/validations';
import { registerUser, SignUpAttriburte } from '../features/auth/authActions';

const SignUp = ({ navigation }: AuthNavigationProps<'SignUp'>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ssn, setSSN] = useState(0);
  const [error, setError] = useState('');

  const {
    error: registrationError,
    loading,
    success,
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      navigation.navigate('AdditionalDetails');
    }
  }, [navigation, success]);

  const submitForm = () => {
    if (!name) {
      setEmail('Invalid Name!');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid Email');
      return;
    }
    if (!isValidSSN(ssn)) {
      setError('Invalid SSN');
      return;
    }
    if (!isValidPassword(password)) {
      setError('Invalid Password');
      return;
    }

    const draftUser: SignUpAttriburte = {
      name,
      email: email.toLowerCase(),
      ssn: ssn.toString(),
      password,
    };
    setError('');
    dispatch(registerUser(draftUser));
  };
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
            {registrationError && (
              <View style={styles.inputContainer}>
                <ErrorMsg msg={registrationError} />
              </View>
            )}
            {error && (
              <View style={styles.inputContainer}>
                <ErrorMsg msg={error} />
              </View>
            )}
            {loading && (
              <View style={styles.inputContainer}>
                <InfoMsg msg="Loading..." />
              </View>
            )}
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Name</Label>
              <TextInput
                value={name}
                onChangeText={(t) => setName(t)}
                placeholder="Name"
              />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Email</Label>
              <TextInput
                value={email}
                onChangeText={(t) => setEmail(t)}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>SSN</Label>
              <TextInput
                value={ssn.toString()}
                onChangeText={(t) => setSSN(+t)}
                placeholder="SSN"
                type="number"
              />
            </View>
            <View style={styles.inputContainer}>
              <Label style={{ marginBottom: 5 }}>Password</Label>
              <TextInput
                value={password}
                onChangeText={(t) => setPassword(t)}
                placeholder="Password"
                type="password"
              />
            </View>
          </View>
          <PrimaryButton onPress={() => submitForm()}>Sign Up</PrimaryButton>
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <Text>Already have an Account, </Text>
            <Pressable
              onPress={() => navigation.navigate('SighIn')}
              style={({ pressed }) => [
                { backgroundColor: pressed ? '#eee' : '#fff' },
              ]}
            >
              <Text bold style={{ color: COLORS.tertiary }}>
                Sign In
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

export default SignUp;
