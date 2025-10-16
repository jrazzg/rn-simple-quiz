import questions from "@/assets/data/questions";
import { QuizContext } from "@/context/QuizContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsScreen = () => {
    const quizContext = useContext(QuizContext);
    if (!quizContext) throw new Error('Context not available');
    const { answers } = quizContext

    let correctAns = 0;
    answers.map((item) => {
        if (item.answer === questions[item.id].answer){
            correctAns++;
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.result}>{correctAns}/5</Text>
            {
                answers.map((item, index) =>
                    <View style={[styles.answersContainer, {backgroundColor: item.answer === questions[item.id].answer ? '#91f896ff' : '#fddedeff'}]} key={index}>
                        <Text style={styles.question}>{questions[item.id].question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </View>
                )
            }
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
    result: {
        fontSize: 100,
        textAlign: 'center',
        marginBottom: 20,
    },
    answersContainer: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },
    question: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    answer: {
        fontSize: 18,
        fontWeight: '500',
    },
})