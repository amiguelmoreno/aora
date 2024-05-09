import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className='flex flex-1 items-center justify-center '>
      <StatusBar style='auto'></StatusBar>
      <Text className='text-3xl font-pblack'>Index page</Text>
      <Link href='/profile' style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
};

export default index;
