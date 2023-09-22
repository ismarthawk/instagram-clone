import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const headerLogo = require("../../assets/insta-logo2.png");
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={headerLogo} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Text style={styles.iconText}>
            <AntDesign name="hearto" style={styles.icon} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.unreadBadge}>1</Text>
          <Text style={styles.iconText}>
            <Fontisto name="messenger" style={styles.icon} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logo: {
    height: 50,
    width: 125,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: "white",
    fontSize: 23,
  },
  iconText: {
    marginLeft: 20,
  },
  unreadBadge: {
    color: "white",
    backgroundColor: "red",
    position: "absolute",
    zIndex: 100,
    height: 20,
    width: 20,
    borderRadius: 100,
    alignContent: "center",
    alignItems: "center",
    left: 30,
    bottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Header;
