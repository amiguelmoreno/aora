import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
    video: string;
    creator: { username: string; avatar: string };
  };
}

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}: VideoCardProps) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="mb-14 items-center px-4">
      <View className="flex-row items-start gap-3">
        <View className="flex-1 flex-row items-center justify-center">
          <View className="h-[46px] w-[46px] items-center justify-center rounded-lg border border-secondary p-0.5">
            <Image
              source={{ uri: avatar }}
              className="h-full w-full rounded-lg"
              resizeMode="contain"
            ></Image>
          </View>
          <View className="ml-3 flex-1 justify-center gap-y-1 ">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="font-pregular text-xs text-gray-50">
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image
            source={icons.menu}
            className="h-5 w-5"
            resizeMode="contain"
          ></Image>
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="h-60 w-full  rounded-[35px] bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
            if (!status.isLoaded) return;
            if (status.didJustFinish) setPlay(false);
          }}
        ></Video>
      ) : (
        <TouchableOpacity
          className="relative mt-3 h-60 w-full items-center justify-center rounded-xl"
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true);
          }}
        >
          <Image
            source={{ uri: thumbnail }}
            className="mt-3 h-full w-full rounded-xl"
            resizeMode="cover"
          ></Image>
          <Image
            source={icons.play}
            className="absolute h-12 w-12"
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
