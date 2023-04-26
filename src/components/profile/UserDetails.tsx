import React, { Dispatch, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { HeadingThree, PrimaryButton, Tag } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { Label, TextInput } from '../common/Form';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { User, updateUser } from '../../features/user/userSlice';
import { nanoid } from '@reduxjs/toolkit';

const userInfoStyle = StyleSheet.create({
  container: {
    margin: 20,
  },
  item: {
    marginBottom: 15,
  },
  tags: {
    flexDirection: 'row',
    gap: 15,
  },
  inputEnabled: {
    backgroundColor: '#fff',
    ...SHADOWS.medium,
  },
  inputDisabled: {
    padding: 0,
    paddingHorizontal: 0,
  },
});

type AccountInfoFormHooks = {
  nameHook: [string, Dispatch<React.SetStateAction<string>>];
  emailHook: [string, Dispatch<React.SetStateAction<string>>];
  mobileNoHook: [string, Dispatch<React.SetStateAction<string>>];
  dobHook: [string, Dispatch<React.SetStateAction<string>>];
};

const AccountInfo = ({
  isEditable,
  formHooks,
}: {
  isEditable: boolean;
  formHooks: AccountInfoFormHooks;
}) => {
  const [name, setName] = formHooks.nameHook;
  const [email, setEmail] = formHooks.emailHook;
  const [mobileNo, setMobileNo] = formHooks.mobileNoHook;
  const [dob, setDob] = formHooks.dobHook;
  return (
    <View style={userInfoStyle.container}>
      <View style={userInfoStyle.item}>
        <Label>Name</Label>
        <TextInput
          disable={!isEditable}
          value={name}
          onChangeText={(text) => setName(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
      <View style={userInfoStyle.item}>
        <Label>Email</Label>
        <TextInput
          disable={!isEditable}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
      <View style={userInfoStyle.item}>
        <Label>Mobile Number</Label>
        <TextInput
          disable={!isEditable}
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
      <View style={userInfoStyle.item}>
        <Label>Date Of Birth</Label>
        <TextInput
          disable={!isEditable}
          value={dob}
          onChangeText={(text) => setDob(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
    </View>
  );
};

type MedicalInfoFormHooks = {
  bloodGroupHook: [string, Dispatch<React.SetStateAction<string>>];
  heightHook: [string, Dispatch<React.SetStateAction<string>>];
  weightHook: [string, Dispatch<React.SetStateAction<string>>];
  allergiesHook: [string, Dispatch<React.SetStateAction<string>>];
};

const MedicalInfo = ({
  isEditable,
  formHooks,
}: {
  isEditable: boolean;
  formHooks: MedicalInfoFormHooks;
}) => {
  const [bloodGroup, setBloodGroup] = formHooks.bloodGroupHook;
  const [height, setHeight] = formHooks.heightHook;
  const [weight, setWeight] = formHooks.weightHook;
  const [allergies, setAllergies] = formHooks.allergiesHook;

  return (
    <View style={userInfoStyle.container}>
      {allergies && !isEditable && (
        <View style={userInfoStyle.item}>
          <Label>Allergies</Label>
          <View style={userInfoStyle.tags}>
            {allergies.split(',').map((allergy, index) => (
              <Tag key={index}>{allergy}</Tag>
            ))}
          </View>
        </View>
      )}
      {isEditable && (
        <View style={userInfoStyle.item}>
          <Label>Allergies</Label>
          <TextInput
            disable={!isEditable}
            value={allergies}
            onChangeText={(text) => setAllergies(text)}
            style={[
              isEditable
                ? userInfoStyle.inputEnabled
                : userInfoStyle.inputDisabled,
            ]}
          />
        </View>
      )}
      <View style={userInfoStyle.item}>
        <Label>Blood Group</Label>
        <TextInput
          disable={!isEditable}
          value={bloodGroup}
          onChangeText={(text) => setBloodGroup(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
      <View style={userInfoStyle.item}>
        <Label>Height</Label>
        <TextInput
          disable={!isEditable}
          value={height}
          onChangeText={(text) => setHeight(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
      <View style={userInfoStyle.item}>
        <Label>Weight</Label>
        <TextInput
          disable={!isEditable}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          style={[
            isEditable
              ? userInfoStyle.inputEnabled
              : userInfoStyle.inputDisabled,
          ]}
        />
      </View>
    </View>
  );
};

const userDetailStyles = StyleSheet.create({
  container: {},
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  tab: {
    padding: 5,
    paddingHorizontal: 10,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.neturalLight,
  },
  hidden: { display: 'none' },
});

const UserDetails = ({
  isEditableHook,
}: {
  isEditableHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) => {
  const [isAccountInfo, setIsAccountInfo] = useState(true);
  const [isEditable, setIsEditable] = isEditableHook;
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [mobileNo, setMobileNo] = useState(user.mobileNo);
  const [dob, setDob] = useState(user.dob);
  const [bloodGroup, setBloodGroup] = useState(user.bloodGroup);
  const [height, setHeight] = useState(user.height);
  const [weight, setWeight] = useState(user.weight);
  const [allergies, setAllergies] = useState(
    user.allergies ? user.allergies.join(',') : ''
  );

  const medicalInfoHooks: MedicalInfoFormHooks = {
    bloodGroupHook: [bloodGroup, setBloodGroup],
    heightHook: [height, setHeight],
    weightHook: [weight, setWeight],
    allergiesHook: [allergies, setAllergies],
  };

  const accountInfoHooks: AccountInfoFormHooks = {
    nameHook: [name, setName],
    emailHook: [email, setEmail],
    mobileNoHook: [mobileNo, setMobileNo],
    dobHook: [dob, setDob],
  };

  const resetForm = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setMobileNo(user.mobileNo);
    setDob(user.dob);
    setBloodGroup(user.bloodGroup);
    setHeight(user.height);
    setWeight(user.weight);
    setAllergies(user.allergies.join(','));
  };

  const submitForm = () => {
    const updatedUser: User = {
      id: nanoid(),
      name: name ? name : user.name,
      allergies: allergies ? allergies.trim().split(',') : user.allergies,
      bloodGroup: bloodGroup ? bloodGroup : user.bloodGroup,
      dob: dob ? dob : user.dob,
      email: email ? email : user.email,
      height: height ? height : user.height,
      mobileNo: mobileNo ? mobileNo : user.mobileNo,
      weight: weight ? weight : user.weight,
    };
    const a = dispatch(updateUser(updatedUser));
    console.log(a);

    resetForm(updatedUser);
    setIsEditable(false);
  };
  return (
    <View style={[userDetailStyles.container]}>
      <View style={userDetailStyles.tabs}>
        <Pressable
          onPress={() => setIsAccountInfo(true)}
          style={({ pressed }) => [
            userDetailStyles.tab,
            {
              backgroundColor: pressed ? '#eee' : '#fff',
              borderColor: isAccountInfo ? COLORS.netural : '#dedede',
            },
          ]}
        >
          <HeadingThree
            bold={isAccountInfo}
            style={{
              textAlign: 'center',
              color: isAccountInfo ? COLORS.netural : COLORS.neturalLight,
            }}
          >
            Account Info
          </HeadingThree>
        </Pressable>
        <Pressable
          onPress={() => setIsAccountInfo(false)}
          style={({ pressed }) => [
            userDetailStyles.tab,
            {
              backgroundColor: pressed ? '#eee' : '#fff',
              borderColor: isAccountInfo ? '#dedede' : COLORS.netural,
            },
          ]}
        >
          <HeadingThree
            bold={!isAccountInfo}
            style={{
              textAlign: 'center',
              color: isAccountInfo ? COLORS.neturalLight : COLORS.netural,
            }}
          >
            Medical Info
          </HeadingThree>
        </Pressable>
      </View>
      {isAccountInfo ? (
        <AccountInfo isEditable={isEditable} formHooks={accountInfoHooks} />
      ) : (
        <MedicalInfo isEditable={isEditable} formHooks={medicalInfoHooks} />
      )}
      {isEditable && (
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <PrimaryButton large onPress={submitForm}>
            Save
          </PrimaryButton>
        </View>
      )}
    </View>
  );
};

export { UserDetails };
