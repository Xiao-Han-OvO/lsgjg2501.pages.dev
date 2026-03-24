import { createContext, useContext, useState, ReactNode } from 'react';

export type Term = "2025秋季学期" | "2026春季学期";

interface TimeContextType {
  currentTerm: Term;
  setCurrentTerm: (term: Term) => void;
  availableTerms: Term[];
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export function TimeProvider({ children }: { children: ReactNode }) {
  const availableTerms: Term[] = ["2026春季学期", "2025秋季学期"];
  const [currentTerm, setCurrentTerm] = useState<Term>(availableTerms[0]);

  return (
    <TimeContext.Provider value={{ currentTerm, setCurrentTerm, availableTerms }}>
      {children}
    </TimeContext.Provider>
  );
}

export const useTime = () => {
  const context = useContext(TimeContext);
  if (!context) throw new Error('useTime must be used within TimeProvider');
  return context;
};
