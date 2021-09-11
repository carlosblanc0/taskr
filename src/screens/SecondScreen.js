import React, { useState } from "react";
import { db } from "../firebase/config";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/taskstyle";

export default function ({ navigation, route }) {
  const [editDescription, setDescription] = useState(route.params.description);
  const taskID = route.params.id;

  function onEditDescription(description, id) {
    db.collection("Tasks").doc(id).update({
      description: editDescription,
    });
    navigation.navigate("Home");
  }
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Info"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Theme PRovider */}
          <View style={styles.container}></View>
          <Text fontWeight="bold" style={styles.description}>
            Edit
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Read for 10 Minutes"
            placeholderTextColor={"#FFAA32"}
            onChangeText={setDescription}
            value={editDescription}
          />
          <TouchableOpacity
            style={styles.newTaskButton}
            onPress={() => {
              onEditDescription(editDescription, taskID);
            }}
          >
            <Text style={styles.iconButton}>✓</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
}
