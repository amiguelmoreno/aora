import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "@/context/GlobarProvider";
import { loadAsync } from "expo-font";

const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href={"/home"}></Redirect>;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="min-h-[85vh] w-full items-center justify-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[84px] w-[130px]"
          ></Image>

          <Image
            source={images.cards}
            resizeMode="contain"
            className="h-[300px] w-full max-w-[380px]"
          ></Image>

          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Disocrver Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 -right-8 h-[15px] w-[136px]"
              resizeMode="contain"
            ></Image>
          </View>
          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="#161622"
        barStyle={"light-content"}
      ></StatusBar>
    </SafeAreaView>
  );
};

export default App;
