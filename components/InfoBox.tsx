import { View, Text } from "react-native";
import React from "react";

interface InfoBoxProp {
  title: string | number;
  subtitle?: string;
  constainerStyles?: string;
  titleStyles: string;
}

const InfoBox = ({
  title,
  subtitle,
  constainerStyles,
  titleStyles,
}: InfoBoxProp) => {
  return (
    <View className={constainerStyles}>
      <Text className={`text-center font-psemibold text-white ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-center font-pregular text-sm text-gray-100">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
