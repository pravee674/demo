import React from 'react';
import './App.css';
import Header from './Header';
import Trending from './Trendings';
import Footer from './Footer'

function App() {
  return (
    <div className="wrapper">
    <Header />
    <Trending />
    <Footer />  
    </div>
  );
}

export default App;
