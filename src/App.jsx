import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.jsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import './App.css';

function App() {
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList />} />
        <Route path="book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
  
  );
}

export default App;

