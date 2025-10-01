import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizScreen = () => {
    const [question, setQuestion] = useState<string>('Did you get dat thing oild down?');
    const [choices, setChoices] = useState<string[]>(['Rome', 'Manila', 'Paris', 'Oslo']);
    const [answer, setAnswer] = useState<string>('Rome');
    
    return (
        <View style={styles.container}>
            <View>
                <Text>QUESTION 1</Text>
                <Text style={styles.question}>{question}</Text>
                {/* <Text style={styles.choice}>Rome</Text>
                <Text style={styles.choice}>Manila</Text>
                <Text style={styles.choice}>Paris</Text>
                <Text style={styles.choice}>Oslo</Text> */}
                {
                    choices.map((item, index) => 
                        <TouchableOpacity onPress={() => setAnswer(item)}><Text key={index} style={styles.choice}>{item}</Text></TouchableOpacity>
                    )
                }
                <Text>SELECTED ANSWER: {answer}</Text>
            </View>
            <TouchableOpacity><Text style={styles.button}>NEXT</Text></TouchableOpacity>
        </View>
    )
}

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        margin: 20,
        justifyContent: 'space-between',
    },
    question: {
        fontSize: 25,
        marginBottom: 20,
    },
    choice: {
        marginBottom: 20,
        backgroundColor: '#dbdbdbff',
        borderRadius: 10,
        fontSize: 15,
        padding: 15,
    },
    button: {
        padding: 15,
        backgroundColor: '#1098e7ff',
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
})