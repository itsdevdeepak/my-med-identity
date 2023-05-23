import React, { Dispatch, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { HeadingThree, PrimaryButton, Tag } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { Label, TextInput } from '../common/Form';
import { useAppDispatch, useUser } from '../../utils/hooks';
import { BloodGroup, User } from '../../features/auth/authSlice';
import {
  UserUpdateAttribute,
  updateUser,
} from '../../features/auth/authActions';

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
  mobileNumberHook: [string, Dispatch<React.SetStateAction<string>>];
  dateOfBirthHook: [string, Dispatch<React.SetStateAction<string>>];
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
  const [mobileNumber, setMobileNumber] = formHooks.mobileNumberHook;
  const [dateOfBirth, setDateOfBirth] = formHooks.dateOfBirthHook;
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
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
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
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
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
  bloodGroupHook: [BloodGroup, Dispatch<React.SetStateAction<BloodGroup>>];
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
          onChangeText={() => setBloodGroup(BloodGroup.AB_POSITIVE)}
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
  const user = useUser();
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name ?? 'NA');
  const [email, setEmail] = useState(user.email ?? 'NA');
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber ?? 'NA');
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth ?? 'NA');
  const [bloodGroup, setBloodGroup] = useState<BloodGroup>(
    user.bloodGroup ?? BloodGroup.NA
  );
  const [height, setHeight] = useState(user.height ?? 'NA');
  const [weight, setWeight] = useState(user.weight ?? 'NA');
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
    mobileNumberHook: [mobileNumber, setMobileNumber],
    dateOfBirthHook: [dateOfBirth, setDateOfBirth],
  };

  const resetForm = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setMobileNumber(user.mobileNumber ?? 'NA');
    setDateOfBirth(user.dateOfBirth);
    setBloodGroup(user.bloodGroup ?? BloodGroup.NA);
    setHeight(user.height ?? 'NA');
    setWeight(user.weight ?? 'NA');
    setAllergies(user.allergies.join(','));
  };

  const submitForm = () => {
    const updatedUser: UserUpdateAttribute = {
      name: name ? name : user.name,
      allergies: allergies ? allergies.trim().split(',') : user.allergies,
      bloodGroup: bloodGroup ? bloodGroup : user.bloodGroup,
      dateOfBirth: dateOfBirth ? dateOfBirth : user.dateOfBirth,
      email: email ? email : user.email,
      height: height ? height : user.height,
      mobileNumber: mobileNumber ? mobileNumber : user.mobileNumber,
      weight: weight ? weight : user.weight,
    };
    dispatch(updateUser(updatedUser));
    resetForm(updatedUser as User);
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
