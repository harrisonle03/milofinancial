import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from "./pages/Dashboard";


function App() {
  const customTheme = {
    list: {
      color: "white"
    }
  };
  return (
    <ThemeProvider value={customTheme}>
      <Sidebar />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
