import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { COLORS } from '../../../constants/theme';
import { Button, Text } from '../index';

type FileUploadProps = {
  placeholder?: string;
  onUpload: (documentResult: DocumentPicker.DocumentPickerOptions) => void;
};

const fileUploadStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    flex: 2,
    paddingLeft: 2,
  },
  button: { width: '20%' },
});

const FileUpload = ({ onUpload, placeholder }: FileUploadProps) => {
  const [fileName, setFileName] = useState(placeholder ?? 'image, pdf, docs');
  const handleUploada = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFileName(result.name);
      }
      onUpload(result);
    } catch (error) {
      setFileName('oops try again!');
      console.log(error);
    }
  };
  return (
    <View style={fileUploadStyles.container}>
      <Text numberOfLines={1} style={fileUploadStyles.text}>
        {fileName}
      </Text>
      <Button onPress={handleUploada} style={fileUploadStyles.button}>
        Upload
      </Button>
    </View>
  );
};

export { FileUpload, FileUploadProps };
