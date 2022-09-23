import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apppppasda!</Text>
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.body}>
        <TextInput style={styles.TextInput} placeholder="Email" />
        <View style={styles.btn}>
          <Button title="Link" />
        </View>
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
  body: {

  },
  TextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 200,
  },
  btn: {
    width: 100,
    display: "flex",
    justifyContent: "center",
  },
});
