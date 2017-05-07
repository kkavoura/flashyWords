import React, { Component } from 'react';
import logo from './fw_logo.png';
import s from './App.css';
import FlashCard from './FlashCard';
import Footer from './Footer/Footer';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
        <div className={s.App}>
          <header className={s.App_header}>
            <span><img src={logo} className={s.App_logo} alt="logo" /></span>
            <h2 className={s.App_brand_name}>Flashy Words</h2>
          </header>
          <Content></Content>          
          <Footer/>
        </div>
    );
  }
}

export default App;
