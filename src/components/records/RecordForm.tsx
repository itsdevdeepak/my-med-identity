import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { HeadingTwo, Icon, PrimaryButton, Text } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { DatePicker, FileUpload, Label, TextInput } from '../common/Form';
import { createRecord } from '../../features/records/recordsAction';
import { useAppDispatch } from '../../utils/hooks';

const recordFormStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 15,
    ...SHADOWS.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  form: {},
  formItem: {
    marginBottom: 10,
  },
});

const RecordForm = ({
  setFormVisibility,
}: {
  setFormVisibility: React.Dispatch<boolean>;
}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [allergies, setAllergies] = useState('');
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();

  const resetForm = () => {
    setError('');
    setName('');
    setDescription('');
    setAllergies('');
  };

  const submitForm = () => {
    if (!name) {
      setError('Please Enter Valid Name');
      return;
    }
    if (!date) {
      setError('Please Provide Valid Date');
      return;
    }
    if (!description) {
      setError('Please Enter Valid Description');
      return;
    }
    const sanitizedAllergies = allergies.split(',');
    dispatch(
      createRecord({
        name,
        description: description,
        allergies: sanitizedAllergies,
        date: date.toISOString(),
        fileUrl: 'https://localhost.com',
      })
    );
    resetForm();
    setFormVisibility(false);
  };

  return (
    <View style={recordFormStyles.container}>
      <View style={recordFormStyles.header}>
        <HeadingTwo style={{ color: COLORS.netural }} bold>
          Add New Record
        </HeadingTwo>
        <Pressable
          onPress={() => setFormVisibility(false)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#115d80' : COLORS.netural,
              borderRadius: 100,
              height: 34,
              width: 34,
              justifyContent: 'center',
              alignItems: 'center',
              ...SHADOWS.medium,
            },
          ]}
        >
          <Icon name="close" fill="#fff" />
        </Pressable>
      </View>
      {error && (
        <View
          style={{
            backgroundColor: '#FF3636',
            borderRadius: 8,
            padding: 8,
            marginBottom: 10,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: '#fff' }}>{`Error: ${error}`}</Text>
        </View>
      )}
      <View style={recordFormStyles.form}>
        <View style={recordFormStyles.formItem}>
          <Label>Name</Label>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
        </View>
        <View style={recordFormStyles.formItem}>
          <Label>Description</Label>
          <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Description"
          />
        </View>
        <View style={recordFormStyles.formItem}>
          <Label>Allergies</Label>
          <TextInput
            value={allergies}
            onChangeText={(text) => setAllergies(text)}
            placeholder="Allergies - comma sperated"
          />
        </View>
        <View style={recordFormStyles.formItem}>
          <Label>Date</Label>
          <DatePicker handleChange={(newDate) => setDate(newDate)} />
        </View>
        <View style={recordFormStyles.formItem}>
          <Label>File</Label>
          <FileUpload onUpload={(item) => console.log(item)} />
        </View>
        <View style={{ marginTop: 10 }}>
          <PrimaryButton onPress={submitForm}>ADD</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export { RecordForm };
