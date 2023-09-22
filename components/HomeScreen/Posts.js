import { View, Text, ScrollView } from "react-native";
import React from "react";
import Post from "./partials/Post";
import postsData from "../../data/postsData";

const Posts = () => {
  return (
    <View showsVerticalScrollIndicator={false}>
      {postsData.map((postData, index) => (
        <Post postData={postData} />
      ))}
    </View>
  );
};

export default Posts;
