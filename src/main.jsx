import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';

import './index.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
       <Route path = "/" element ={<Home/>}/>
       <Route path = "about" element = {<About/>}/>
       <Route path = "book" element = {<BookList/>}/>
       <Route path = "book/:id" element = {<BookDetails/>}/>
    
    </Routes>
 </BrowserRouter>
)
