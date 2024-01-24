import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [balance, setBalance] = useState([]);

  const values = {
    expenses,
    setExpenses,
    income,
    setIncome,
    balance,
    setBalance,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
