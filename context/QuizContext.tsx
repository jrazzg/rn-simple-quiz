import { createContext, ReactNode, useState } from "react";

type AnswerListType = {
    id: number,
    answer: string
}

type QuizContextType = {
    answers: AnswerListType[];
    updateList: (id: number, answer: string) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

type QuizProviderProps = {
    children: ReactNode;
}

const QuizProvider = ({children}: QuizProviderProps) => {
    const [answers, setAnswers] = useState<AnswerListType[]>([]);

    const updateList = (id: number, answer: string) => {
        setAnswers([...answers, {id, answer}])
        console.log(answer)
    }

    return (
        <QuizContext.Provider value={{ answers, updateList }}> 
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;