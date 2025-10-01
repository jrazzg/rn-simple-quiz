import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
        <Link href={'/QuizScreen'}><Text>Go to Quiz Screen</Text></Link>
        <Link href={'/ResultsScreen'}><Text>Go to Results Screen</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
