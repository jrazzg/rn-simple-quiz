import questions from "@/assets/data/questions";
import { QuizContext } from "@/context/QuizContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizScreen = () => {
    const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 30));
    const [question, setQuestion] = useState<string>(questions[randomNumber].question);
    const [choices, setChoices] = useState<string[]>(questions[randomNumber].choices);
    const [answer, setAnswer] = useState<string>('');
    const [count, setCount] = useState<number>(1);
    const [usedNum, setUsedNum] = useState<number[]>([randomNumber]);
    const quizContext = useContext(QuizContext);
    if (!quizContext) throw new Error('Context not available.');
    const { updateList } = quizContext;

    const router = useRouter();
    const nextQuestion = (ans: string, id: number, ask: string) => {

        updateList(id, ans)
        console.log('ID: ', id, "ANS: ", ans, "QUST: ", ask)

        if (count > 4) {
            return router.push('/ResultsScreen');
        }

        let newRandomNumber;
        do {
            newRandomNumber = Math.floor(Math.random() * 30);
        } while (usedNum.includes(newRandomNumber));
        
        setUsedNum([...usedNum, randomNumber]);
        setRandomNumber(newRandomNumber);
        setQuestion(questions[newRandomNumber].question);
        setChoices(questions[newRandomNumber].choices);
        setCount(prev => prev + 1);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>QUESTION {count}</Text>
                <Text style={styles.question}>{question}</Text>
                {
                    choices.map((item, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => setAnswer(item)}>
                            <Text
                                style={[styles.choice, {
                                    backgroundColor: answer === item ? '#1098e7ff' : '#dbdbdbff',
                                    color: answer === item ? 'white' : 'black'
                                }]}>{item}</Text></TouchableOpacity>
                    )
                }
            </View>
            <TouchableOpacity onPress={() => nextQuestion(answer, randomNumber, question)}><Text style={styles.button}>NEXT</Text></TouchableOpacity>
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