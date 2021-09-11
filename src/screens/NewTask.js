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

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [description, setDescription] = useState(null);

  function addTask() {
    db.collection("Tasks").add({
      description: description,
      status: false,
    });
    navigation.navigate("Home");
  }
  return (
    <Layout>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}
      >
        <TopNav
          middleContent="New Task"
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
            Add a task
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Read for 10 Minutes"
            placeholderTextColor={"#FFAA32"}
            onChangeText={(description) => setDescription(description)}
            value={description}
          />
          <TouchableOpacity
            style={styles.newTaskButton}
            onPress={() => {
              addTask();
            }}
          >
            <Text style={styles.iconButton}>Done</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
}
