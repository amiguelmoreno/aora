import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <View className="items-center justify-center px-4">
      <Image
        source={images.empty}
        className="h-[215px] w-[270px]"
        resizeMode="contain"
      ></Image>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <Text className="mt-2 text-center font-psemibold text-xl text-white">
        {title}
      </Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      ></CustomButton>
    </View>
  );
};

export default EmptyState;
