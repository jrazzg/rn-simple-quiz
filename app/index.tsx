import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Simple Random Quiz</Text>
        <Link href={'/QuizScreen'} style={styles.button}><Text>TAKE QUIZ</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        
    },  
    button: {
        padding: 15,
        backgroundColor: '#1098e7ff',
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        borderRadius: 10,
    },
})
