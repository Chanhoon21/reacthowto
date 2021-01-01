import React, { Component } from 'react';
import './App.css';
import TOC from "./component/TOC";
import Content from './component/content';
import Subject from './component/Subject';

class App extends Component{

  render(){
    return(

      <div className="App">
        <Subject title='WEB' sub= ' hello welcome to chanhoon world'></Subject>
        <TOC></TOC>
        <Content title='HTOML'desc ='HTML dsdsdis Markup language '></Content>
      </div>
    )


  }
}



export default App;
