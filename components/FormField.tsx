import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  keyboardType?: string;
  otherStyles?: string;
  placeholder?: string;
}

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center border-2 border-black-200'>
        <TextInput
          className='w-full flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        ></TextInput>
      </View>
    </View>
  );
};

export default FormField;
