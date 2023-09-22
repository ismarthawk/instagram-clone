import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

// const postData = {
//   attribution: null,
//   tags: [],
//   type: "image",
//   location: null,
//   filter: "Normal",
//   created_time: "1440501087",
//   link: "https://instagram.com/p/6zeBG2H1oH/",
//   images: {
//     low_resolution: {
//       url: "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11906267_1671515619746683_1237948463_n.jpg",
//       width: 320,
//       height: 320,
//     },
//     thumbnail: {
//       url: "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/11906267_1671515619746683_1237948463_n.jpg",
//       width: 150,
//       height: 150,
//     },
//     standard_resolution: {
//       url: "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11906267_1671515619746683_1237948463_n.jpg",
//       width: 640,
//       height: 640,
//     },
//   },
//   users_in_photo: [],
//   caption: {
//     created_time: "1440501087",
//     text: "Logon this is the logo of PRDP, matlab Prem Ratan Dhan Payo. Coming this Diwali",
//     from: {
//       username: "beingsalmankhan",
//       profile_picture:
//         "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
//       id: "1547627005",
//       full_name: "Salman Khan",
//     },
//     id: "1059322357729942165",
//   },
//   user_has_liked: false,
//   id: "1059322354827483655_1547627005",
//   user: {
//     username: "beingsalmankhan",
//     profile_picture:
//       "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
//     id: "1547627005",
//     full_name: "Salman Khan",
//   },
// };
const Post = ({ postData }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: "https://api.slingacademy.com/public/sample-photos/6.jpeg",
          }}
          style={{ height: 30, width: 30, borderRadius: 50, marginRight: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            flexGrow: 1,
            alignSelf: "center",
          }}
        >
          {postData.user.username}
        </Text>
        <Text
          style={{
            transform: [{ rotate: "90deg" }],
          }}
        >
          <Octicons
            name="kebab-horizontal"
            style={{
              color: "white",
              fontSize: 15,
            }}
          />
        </Text>
      </View>

      {/* Post Photo */}
      <Image
        source={{
          uri: "https://api.slingacademy.com/public/sample-photos/6.jpeg",
        }}
        style={{
          height: 320,
          width: 360,
          marginBottom: 8,
        }}
      />

      {/* Icons */}
      <View style={styles.icons}>
        <Text style={styles.iconText}>
          <AntDesign name="hearto" style={styles.icon} />
        </Text>
        <Text style={styles.iconText}>
          <Feather name="message-circle" style={styles.icon} />
        </Text>
        <Text style={{ ...styles.iconText, flexGrow: 1 }}>
          <Feather name="send" style={{ ...styles.icon }} />
        </Text>
        <Text style={styles.iconText}>
          <Feather name="bookmark" style={styles.icon} />
        </Text>
      </View>

      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 13,
          marginHorizontal: 10,
          marginBottom: 3,
        }}
      >
        7,222,335 likes
      </Text>

      {/* name and caption and view all comments*/}
      <Text
        style={{
          marginHorizontal: 10,
          color: "white",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          {postData.user.username + " "}
        </Text>
        {postData.caption.text}
      </Text>
      <Text
        style={{
          marginHorizontal: 10,
          color: "white",
          fontWeight: "100",
          marginBottom: 3,
        }}
      >
        View all 669 comments
      </Text>

      {/* some comments */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          onepiece
        </Text>
        <Text
          style={{
            color: "white",
            flexGrow: 1,
          }}
        >
          {" "}
          {" 🔥🔥🔥"}
        </Text>

        <Text style={{ marginHorizontal: 10 }}>
          <AntDesign name="hearto" style={{ color: "white" }} />
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          alignContent: "center",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          rajini_thalaiva
        </Text>
        <Text
          style={{
            color: "white",
            flexGrow: 1,
          }}
        >
          {" "}
          {" 🔥🔥🔥"}
        </Text>

        <Text style={{ marginHorizontal: 10 }}>
          <AntDesign name="hearto" style={{ color: "white" }} />
        </Text>
      </View>

      {/* {time} */}
      <Text
        style={{
          marginHorizontal: 10,
          color: "white",
          fontWeight: "100",
          marginBottom: 3,
          fontSize: 12,
        }}
      >
        10 days ago
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    marginHorizontal: 8,
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 10,
  },

  icons: {
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 5,
  },
  iconText: {
    marginRight: 15,
  },
  icon: {
    color: "white",
    fontSize: 27,
  },
});

export default Post;
