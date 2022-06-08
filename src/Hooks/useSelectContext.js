import React, { useContext } from "react";
import { SelectContext } from "../context/SelectContext";

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("useSelect() must be used inside a SelectProvider");
  }

  return context;
};
