import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { HeadingThree, PrimaryButton, Tag } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { Label, TextInput } from '../common/Form';

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

const AccountInfo = ({ isEditable }: { isEditable: boolean }) => {
  const user = {
    name: 'Depz XD',
    email: 'me@depz.com',
    mobileNo: 9099999999,
    dob: '02-02-2022',
  };
  return (
    <View style={userInfoStyle.container}>
      <View style={userInfoStyle.item}>
        <Label>Name</Label>
        <TextInput
          disable={!isEditable}
          value={user.name}
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
          value={user.email}
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
          value={user.mobileNo.toString()}
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
          value={user.dob}
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

const MedicalInfo = ({ isEditable }: { isEditable: boolean }) => {
  const user = {
    bloodGroup: 'A',
    weight: '500',
    height: '6.5',
    allergies: ['allergie 1', 'allergie 2', 'allergie 3'],
  };
  return (
    <View style={userInfoStyle.container}>
      <View style={userInfoStyle.item}>
        <Label>Allergies</Label>
        <View style={userInfoStyle.tags}>
          {user.allergies.map((allergy, index) => (
            <Tag key={index}>{allergy}</Tag>
          ))}
        </View>
      </View>
      <View style={userInfoStyle.item}>
        <Label>Blood Group</Label>
        <TextInput
          disable={!isEditable}
          value={user.bloodGroup}
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
          value={user.height}
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
          value={user.weight}
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
  const isEditable = isEditableHook[0];
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
        <AccountInfo isEditable={isEditable} />
      ) : (
        <MedicalInfo isEditable={isEditable} />
      )}
      <View
        style={{ paddingHorizontal: 20, display: isEditable ? 'flex' : 'none' }}
      >
        <PrimaryButton large>Save</PrimaryButton>
      </View>
    </View>
  );
};

export { UserDetails };
