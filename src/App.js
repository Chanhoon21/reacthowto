import React, { Component } from 'react';
import './App.css';
import TOC from "./component/TOC";
import Content from './component/content';
import Subject from './component/Subject';

class App extends Component{
  constructor (probs){
    super(probs);
    this.state ={
      subject: {title: '찬훈', sub: '안녕하세요 '},
      contents: [

        {id: 1, title: 'HTML', desc: 'HTML is HYPER markup language'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'Javscript is for interactive'}

      ]
    }
  }
  render(){
    return(

      <div className="App">
        <Subject title= {this.state.subject.title} sub= {this.state.subject.sub}></Subject>
        <TOC data ={this.state.contents}></TOC>
        <Content title='HTOML'desc ='HTML dsdsdis Markup language '></Content>
      </div>
    )


  }
}



export default App;
