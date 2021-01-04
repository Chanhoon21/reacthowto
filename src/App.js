import React, { Component } from 'react';
import './App.css';
import TOC from "./component/TOC";
import Content from './component/content';
import Subject from './component/Subject';

class App extends Component{
  constructor (probs){
    super(probs);
    this.state ={

      mode: 'read', 
      subject: {title: '찬훈', sub: '안녕하세요 '},
      
      welcome: {title: 'welcome', desc: "hello react!!"},
      
      contents: [

        {id: 1, title: 'HTML', desc: 'HTML is HYPER markup language'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'Javscript is for interactive'}

      ]
    }// construnctor  함수 안에서는 그냥 스테이트 변경해도 된다. 그러나 프롭스가 제시된 이후에는 동적으로 변경항 깨는 setState를 사용ㅎ야한다.
  }// 프롭스나 컴포넌트가 바뀌면 해당되는 컴포넌트의 렌더 함수와 자식컴포넌트 렌더함수도 다시호출된다.
  render(){
    console.log('App render')
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){

      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode ==='read'){
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;

    }
    return(

      <div className="App">
        <Subject title= {this.state.subject.title} 
        sub= {this.state.subject.sub} 
        onChangePage= {function (){this.setState({mode: 'welcome'})}.bind(this)}
        ></Subject> 
        {/* onChangePage라는 event를 subject안에 만들어 넣었다. 그리고 그안에 함수를 설치했다.
        그렇게 되면 이벤트가 발생했을 때 프롭스로 전달된 온체인지페이지 함수를호출하게된다. */}
      {/*   <h1><a href="/" onClick= {function (e) {
          e.preventDefault();
          this.setState({mode:'welcome'});// 프롭스가 제시된 이후에는 동적으로 변경항 깨는 setState를 사용ㅎ야한다.

          
        }.bind(this)}>{this.state.subject.title}</a></h1>
           { this.state.subject.sub}
        </header> */}
        <TOC datae ={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )


  }
}



export default App;
