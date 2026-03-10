import { createContext, useContext, useMemo, useState } from "react";
import { projectConstants as EnglishConstants } from "../../constants/en";
import { projectConstants as SpanishConstants } from "../../constants/es";

export const CampusContext = createContext({
  projectConstants: SpanishConstants,
});

export const CampusProvider = ({ children }: { children: React.ReactNode }) => {
  const [constantsByLanguaje, setConstantsByLanguaje] =
    useState(SpanishConstants);

  const setConstantsByLanguajeFunction = (languaje: "en" | "es") => {
    switch (languaje) {
      case "es":
        setConstantsByLanguaje(SpanishConstants);
        break;
      case "en":
        setConstantsByLanguaje(EnglishConstants);
        break;
      default:
        setConstantsByLanguaje(SpanishConstants);
        break;
    }
  };

  const value = useMemo(
    () => ({
      projectConstants: constantsByLanguaje,
      setConstantsByLanguajeFunction,
      toggleSatis: () => null,
    }),
    [constantsByLanguaje],
  );

  return (
    <CampusContext.Provider value={value}>{children}</CampusContext.Provider>
  );
};

export const useCampus = () => {
  const context = useContext(CampusContext);
  if (!context) {
    throw new Error("useCampus must be used within a CampusProvider");
  }
  return context;
};
