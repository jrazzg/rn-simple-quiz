import QuizProvider from "@/context/QuizContext";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <QuizProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </QuizProvider>
    );
};
