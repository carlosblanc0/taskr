import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { db } from "../firebase/config";
import styles from "../styles/style";
import {
  Layout,
  Text,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [task, setTask] = useState([]);

  useEffect(() => {
    db.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);

  function deleteTask(id) {
    db.collection("Tasks").doc(id).delete();
  }

  return (
    <Layout>
      <TopNav
        middleContent="Taskr"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.warning}
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

      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={task}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <TouchableOpacity
                  style={styles.deleteTaskButton}
                  onPress={() => {
                    deleteTask(item.id);
                  }}
                >
                  <FontAwesome
                    name="trash-o"
                    size={24}
                    color="#FFB20F"
                  ></FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.taskDescription}
                  onPress={() => {
                    navigation.navigate("SecondScreen", {
                      id: item.id,
                      description: item.description,
                    });
                  }}
                >
                  {item.description}
                </Text>
              </View>
            );
          }}
        />
        <TouchableOpacity
          style={styles.newTaskButton}
          onPress={() => navigation.navigate("NewTask")}
        >
          <Text style={styles.iconButton}>+</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
