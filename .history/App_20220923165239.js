import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my App</Text>
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.body}>
        <View>
          <TextInput style={styles.TextInput} placeholder="Email" />
        </View>
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
    display: "flex",
    flexDirection: "row",
  },
  TextInput: {
    padding: 3,
    borderWidth: 1,
    borderColor: "black",
    width: 150,
  },
  btn: {
    width: 50,
    marginLeft: 10,
  },
  text: {
    fontSize: 30,
    color
  }
});
