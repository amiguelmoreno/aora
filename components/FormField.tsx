import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

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
      <Text className="font-pmedium text-base text-gray-100">{title}</Text>
      <View className="h-16 w-full flex-row items-center rounded-2xl border-2 border-black-200 bg-black-100 px-4 focus:border-secondary">
        <TextInput
          className="h-full w-full flex-1 font-psemibold text-base text-white "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        ></TextInput>

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="h-6 w-6"
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
