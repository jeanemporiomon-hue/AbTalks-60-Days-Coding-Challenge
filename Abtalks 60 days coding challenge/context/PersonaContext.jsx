import React, { createContext, useContext, useState } from 'react';
import { INITIAL_PERSONAS } from '../data/mockData';

const PersonaContext = createContext();

export const PersonaProvider = ({ children }) => {
  const [personas, setPersonas] = useState(INITIAL_PERSONAS);
  const [activePersonaId, setActivePersonaId] = useState('personaB'); // Default to Persona B (Consistent Builder) for rich state
  const [isFrameMode, setIsFrameMode] = useState(true); // Default preview frame container on desktop

  const activePersona = personas[activePersonaId];

  const switchPersona = (id) => {
    if (personas[id]) {
      setActivePersonaId(id);
    }
  };

  const resetPersonas = () => {
    setPersonas(INITIAL_PERSONAS);
  };

  const submitDayProof = (dayNum, githubUrl, linkedinUrl) => {
    setPersonas((prev) => {
      const currentPersona = prev[activePersonaId];
      const updatedDays = currentPersona.days.map((dayObj) => {
        if (dayObj.day === dayNum) {
          return {
            ...dayObj,
            status: 'completed',
            githubUrl,
            linkedinUrl,
            submittedAt: new Date().toISOString()
          };
        }
        return dayObj;
      });

      // Recalculate streak and completed count
      const completedCount = updatedDays.filter(d => d.status === 'completed').length;
      const newStreak = currentPersona.streak + 1;

      return {
        ...prev,
        [activePersonaId]: {
          ...currentPersona,
          streak: newStreak,
          completedDaysCount: completedCount,
          days: updatedDays,
          // Update rank dynamically if applicable
          rank: currentPersona.rank === 'Unranked' ? '#450' : currentPersona.rank
        }
      };
    });
  };

  return (
    <PersonaContext.Provider
      value={{
        personas,
        activePersonaId,
        activePersona,
        switchPersona,
        resetPersonas,
        submitDayProof,
        isFrameMode,
        setIsFrameMode
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
