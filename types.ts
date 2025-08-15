
export interface Student {
  id: string;
  name: string;
  class: string;
  dob: string;
  parentName: string;
  parentPhone: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  assignedClasses: string[];
}

export interface SchoolClass {
  id: string;
  name: string;
  teacher: string;
  subjects: string[];
  imageUrl: string;
}

export interface CBTQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}