export interface Question {
    id: number;
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers?: string[];
}

export interface PlayStatus {
    lives: number;
    curQuestionNumber: number;
    correctCount: number;
    skippedLeft: number;
    totalCount: number;
}

export interface UpdateStatus {
    hasSkipped?: boolean;
    isCorrect?: boolean;
}

export interface AppState {
    questions: Question[];
    status: PlayStatus;
}
