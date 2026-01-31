export interface CVData {
  serverName: string;
  discordName: string;
  age: string;
  experience: string;
}

export interface QuestionAnswers {
  question1: string;
  question2: string;
  question3: string;
}

export type Page = 'home' | 'cv' | 'biography' | 'hierarchy' | 'family';
