import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import users from "../../data/data";

const Storeis = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {users.map((user, index) => (
          <View key={index} style={styles.story}>
            <Image
              source={{
                uri: user.url,
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#ff8501",
              }}
            />
            <Text style={{ color: "white" }}>
              {user.description.length > 8
                ? user.description.slice(0, 8) + "..."
                : user.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  story: {
    alignItems: "center",
    marginLeft: 12,
  },
});

export default Storeis;
