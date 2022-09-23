import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apppppasda!</Text>
      <Button title="Link" />
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.body}>
        <TextInput style={styles.TextInput} placeholder="Email" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {},
  TextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 200,
  },
});
