import React, { Component } from 'react';
import './App.css';

class Subject extends Component{ 
  render(){
    return(
      <header>
      <h1> WEB</h1>
        welcome to chanhoon world
      </header>
      // 최신 분법에서는 class내 함수는 function붙이지 않음. 그러므로 render에 function안붙ㅇ므
      // react에서는 하나의 최상위 태그만 가능 
    );

  }


}
//JavaScript가 아님 jsx라는 언엉미


class App extends Component{

  render(){
    return(

      <div className="App">
        <Subject></Subject>

      </div>
    )


  }
}



export default App;
