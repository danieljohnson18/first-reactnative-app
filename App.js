import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Daniel", key: 20 },
    { name: "Johnson", key: 19 },
    { name: "Arikawe", key: 18 },
    { name: "Tolu", key: 17 },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "40px",
    paddingHorizontal: "20px",
  },
});
