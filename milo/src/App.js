import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Home from './pages/Home';

function App() {
  /*
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts
 */
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
