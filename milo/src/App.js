import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  const customTheme = {
    component: {
      styles: {
        global: {
          body: {
            fontFamily: "'Single Day', cursive",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
