import { ThemeProvider } from "@rneui/themed";
import Entry from "./Entry";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Entry />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
