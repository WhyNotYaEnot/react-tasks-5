import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  const menuList = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <div className="app">
      <Header title="Header" />
      <div className="main-content">
        <SideBar title="SideBar" menuList={menuList} />
        <Content title="Content" />
      </div>
      <Footer title="Footer" menuList={menuList} />
    </div>
  );
}

export default App;
