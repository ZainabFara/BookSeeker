import React from 'react'
import Header from '../../components/Header/Header';
import BookList from '../../components/BookList/BookList';
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <BookList />   {/* Boklista */}
  </main>
  )
}

export default Home
