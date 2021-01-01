import React, { Component } from 'react'; //react 라는 라이브러리ㅏ에어comnent 라는 클래스를 불러온거임 컴포넌트를 쓸 때 피료


class TOC extends Component{
    render(){
      return(
        <nav>
          <ul>
              <li><a href="1.html">HTMl</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
              
          </ul>
      </nav>
  
  
      );
  
    }
  
  }

export default TOC;//가져다 쓰는 사람들이 export 코드를 통해 TOC 클래스를 사용할 수 있게 된다. 