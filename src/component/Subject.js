import React, {Component} from 'react';


class Subject extends Component{ 
    render(){
      return(
        
        <header>
        <h1><a href="/"onClick={function (e) {e.preventDefault();
        console.log(e);
          
        }}>{this.props.title}</a></h1>
           { this.props.sub}
        </header>
        // 최신 분법에서는 class내 함수는 function붙이지 않음. 그러므로 render에 function안붙ㅇ므
        // react에서는 하나의 최상위 태그만 가능 
      );
  
    }
  
  
  }
  //JavaScript가 아님 jsx라는 언어임

  export default Subject;