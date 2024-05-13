import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  ViewToken,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";

const zoomIn = {
  from: { scale: 0.85 },
  to: { scale: 1 },
};

const zoomOut = {
  from: { scale: 1 },
  to: { scale: 0.85 },
};

const TrendingItem = ({ activeItem, item }: any) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mb-2 mr-5"
      animation={
        activeItem === item.$id
          ? (zoomIn as Animatable.CustomAnimation)
          : (zoomOut as Animatable.CustomAnimation)
      }
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="mt-3 h-72 w-52 rounded-[35px] bg-white/10"
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
          className="relative items-center justify-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="my-5 h-72 w-52 overflow-hidden rounded-[35px] shadow-lg shadow-black/40"
          ></ImageBackground>
          <Image
            source={icons.play}
            className="absolute h-12 w-12"
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: any) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      horizontal
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170, y: 0 }}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
    />
  );
};

export default Trending;
