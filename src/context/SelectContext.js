import React, { createContext, useReducer } from "react";
import dayjs from "dayjs";

export const SelectContext = createContext();

const selectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return { ...state, filter: "date", date: action.payload };
    case "CHANGE_ACCOUNT":
      return { ...state, filter: "account", account: action.payload };
  }
};

export function SelectProvider({ children }) {
  const format = "YYYY-MM-DD";
  const nowday = dayjs().format(format);
  const [state, dispatch] = useReducer(selectReducer, {
    filter: "date",
    date: nowday,
    account: "",
  });

  const changeDate = (date) => {
    dispatch({ type: "CHANGE_DATE", payload: date });
  };

  const changeAccount = (account) => {
    dispatch({ type: "CHANGE_ACCOUNT", payload: account });
  };

  return (
    <SelectContext.Provider value={{ ...state, changeDate, changeAccount }}>
      {children}
    </SelectContext.Provider>
  );
}
