import React, { createContext, useReducer } from "react";
import dayjs from "dayjs";

export const SelectContext = createContext();

const selectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return { ...state, date: action.payload };
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    case "CHANGE_FILTER":
      return { ...state, filter: action.payload };
  }
};

export function SelectProvider({ children }) {
  const format = "YYYY-MM-DD";
  const nowday = dayjs().format(format);
  const [state, dispatch] = useReducer(selectReducer, {
    filter: "date",
    date: nowday,
  });

  const changeDate = (date) => {
    dispatch({ type: "CHANGE_DATE", payload: date });
  };

  const changeFilter = (filter) => {
    dispatch({ type: "CHANGE_FILTER", payload: filter });
  };

  return (
    <SelectContext.Provider value={{ ...state, changeDate, changeFilter }}>
      {children}
    </SelectContext.Provider>
  );
}
