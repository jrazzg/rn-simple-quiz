import { createContext, ReactNode, useState } from "react";


type QuizContextType = {
    answers: number;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

type QuizProviderProps = {
    children: ReactNode;
}

const QuizProvider = ({children}: QuizProviderProps) => {
    const [answers, setAnswers] = useState<number>(67);

    return (
        <QuizContext.Provider value={{ answers }}> 
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;