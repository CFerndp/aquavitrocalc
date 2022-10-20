import { StyleSheet, Text, View } from "react-native";
import i18n from "./i18n";
import { Button } from '@rneui/themed';

export default function Entry() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t("hello")}</Text>
      <Button title="Hey!" />
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
});
