import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  DatePicker,
  Label,
  Select,
  TextInput,
} from '../components/common/Form';
import {
  Button,
  HeadingThree,
  HeadingTwo,
  Icon,
  InfoMsg,
  PrimaryButton,
  Text,
} from '../components/common';
import { COLORS, SIZES } from '../constants/theme';
import { ErrorMsg } from '../components/common/ErrorMsg';
import { useAppDispatch, useAppSelector, useUser } from '../utils/hooks';
import { PostSignUpAttribute, postSignUp } from '../features/auth/authActions';
import { BloodGroup, Gender, skipPostSignup } from '../features/auth/authSlice';
import { AuthNavigationProps } from '../navigation/types';

const AdditionalDetails = ({
  navigation,
}: AuthNavigationProps<'AdditionalDetails'>) => {
  const [bloodGroup, setBloodGroup] = useState<BloodGroup>();
  const [gender, setGender] = useState<Gender>();
  const [dob, setDob] = useState(new Date('2000'));
  const [allergies, setAllergies] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { error: signUpError, loading } = useAppSelector((state) => state.auth);
  const user = useUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      navigation.navigate('SighIn');
    }
  });

  const submitForm = () => {
    if (!bloodGroup || bloodGroup === BloodGroup.NA) {
      setErrorMsg('Invalid Blood Group');
      return;
    }
    if (!gender) {
      setErrorMsg('Invalid Gender');
      return;
    }
    if (!dob) {
      setErrorMsg('Invalid Date of Birth');
      return;
    }
    if (!height) {
      setErrorMsg('Invalid Height');
      return;
    }
    if (!weight) {
      setErrorMsg('Invalid Weight');
      return;
    }
    if (!mobileNo) {
      setErrorMsg('Invalid Mobile No');
      return;
    }

    const updatedUser: PostSignUpAttribute = {
      bloodGroup: bloodGroup,
      gender,
      height,
      allergies: allergies.trim().split(','),
      weight,
      dateOfBirth: dob.toISOString(),
      mobileNumber: mobileNo,
    };

    dispatch(postSignUp(updatedUser));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.welcomeMsg}>
              <HeadingThree style={{ color: COLORS.netural }}>
                Create a New Account
              </HeadingThree>
              <Text
                style={{ fontSize: SIZES.small, color: COLORS.neturalLight }}
              >
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
              {signUpError && (
                <View style={styles.inputContainer}>
                  <ErrorMsg msg={signUpError} />
                </View>
              )}
              {errorMsg && (
                <View style={styles.inputContainer}>
                  <ErrorMsg msg={errorMsg} />
                </View>
              )}
              {loading && (
                <View style={styles.inputContainer}>
                  <InfoMsg msg="Submitting..." />
                </View>
              )}
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Date Of Birth</Label>
                <DatePicker handleChange={(date) => setDob(date)} />
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Blood Group</Label>
                <Select
                  selectedValue={bloodGroup}
                  onValueChange={(value) => setBloodGroup(value as BloodGroup)}
                >
                  {Object.values(BloodGroup).map((bloodGroup, index) => {
                    return (
                      <Select.Option
                        label={bloodGroup}
                        value={bloodGroup}
                        key={index}
                      />
                    );
                  })}
                </Select>
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Gender</Label>
                <Select
                  selectedValue={gender}
                  onValueChange={(value) => setGender(value as Gender)}
                >
                  {Object.values(Gender).map((gender, index) => {
                    return (
                      <Select.Option
                        label={gender}
                        value={gender}
                        key={index}
                      />
                    );
                  })}
                </Select>
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Height</Label>
                <TextInput
                  value={height}
                  onChangeText={(t) => setHeight(t)}
                  placeholder="Height"
                />
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Weight</Label>
                <TextInput
                  value={weight}
                  onChangeText={(t) => setWeight(t)}
                  placeholder="Weight"
                />
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Mobile Number</Label>
                <TextInput
                  value={mobileNo}
                  onChangeText={(t) => setMobileNo(t)}
                  placeholder="Mobile Number"
                  type="number"
                />
              </View>
              <View style={styles.inputContainer}>
                <Label style={{ marginBottom: 5 }}>Allergies</Label>
                <TextInput
                  value={allergies}
                  onChangeText={(t) => setAllergies(t)}
                  placeholder="Allergy 1, Allergy 2"
                />
              </View>
            </View>
            <Button
              onPress={() => dispatch(skipPostSignup())}
              style={{ backgroundColor: COLORS.neturalLight, marginBottom: 15 }}
              underlayColor="#476170"
            >
              Skip for Now
            </Button>
            <PrimaryButton onPress={() => submitForm()}>Submit</PrimaryButton>
          </View>
        </View>
      </ScrollView>
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
