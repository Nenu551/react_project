import { Route, Routes } from 'react-router';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

const App = () => {
  
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/:id" element={<DetailsPage />} />
    </Routes>
  );
}

export default App
