import { createContext, ReactNode, useState } from "react";

type AnswerListType = {
    id: number,
    answer: string
}

type QuizContextType = {
    answers: AnswerListType[];
    updateList: (id: number, answer: string) => void;
    resetList: () => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

type QuizProviderProps = {
    children: ReactNode;
}

const QuizProvider = ({children}: QuizProviderProps) => {
    const [answers, setAnswers] = useState<AnswerListType[]>([]);

    const updateList = (id: number, answer: string) => {
        setAnswers([...answers, {id, answer}])
    }
    const resetList = () => {
        setAnswers([]);
    }

    return (
        <QuizContext.Provider value={{ answers, updateList, resetList }}> 
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;