import { QuizContext } from "@/context/QuizContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsScreen = () => {
    const quizContext = useContext(QuizContext);

    if (!quizContext) throw new Error('Context not available');
    const { answers } = quizContext

    return (
        <View style={styles.container}>
            <Text>Results Screen</Text>
            <Text>{answers}</Text>
        </View>
    )
}

export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        margin: 20,
    },
})