import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import Header from "../components/HomeScreen/Header";
import Storeis from "../components/HomeScreen/Storeis";
import Posts from "../components/HomeScreen/Posts";

const HomeScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Storeis />
          <Posts />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default HomeScreen;
