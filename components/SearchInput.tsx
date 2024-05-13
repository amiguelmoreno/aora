import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { router, usePathname } from "expo-router";

interface SearchInputProps {
  initialQuery?: string | string[];
  handleChangeText?: (text: string) => void;
  keyboardType?: string;
  otherStyles?: string;
  placeholder?: string;
}

const SearchInput = ({
  initialQuery,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
  ...props
}: SearchInputProps) => {
  const initialString = Array.isArray(initialQuery)
    ? initialQuery[0] || ""
    : initialQuery;

  const pathname = usePathname();
  const [query, setQuery] = useState(initialString);

  return (
    <View className="h-16 w-full flex-row items-center space-x-4 rounded-2xl border-2 border-black-200 bg-black-100  px-4 focus:border-secondary">
      <TextInput
        className="mt-0.5 h-full w-full flex-1  font-pregular text-base text-white"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      ></TextInput>

      <TouchableOpacity
        className="h-full items-center justify-center"
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input somthing to search result across database",
            );
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          className="h-5 w-5 "
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
