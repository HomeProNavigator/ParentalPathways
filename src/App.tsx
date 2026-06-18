import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FCFAF7]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
