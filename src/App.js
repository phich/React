import React, { Component } from 'react';
import './App.css';
import './components/header'
import { Header } from './components/header';
import { LeftMenu } from "./components/leftMenu";
import { Content } from "./components/content";
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <LeftMenu></LeftMenu>
        <Content></Content>
      </div>
    );
  }
}

export default App;
