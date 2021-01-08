import React, { Component } from 'react'; //react 라는 라이브러리ㅏ에어comnent 라는 클래스를 불러온거임 컴포넌트를 쓸 때 피료


class TOC extends Component{
    render(){
      var lists = [];
      var data= this.props.datae;
      var i = 0;
      while (i < data.length) {
        lists.push(
        <li>
          <a 
            href={"/content/"+data[i].id}
            data-id ={data[i].id}
            onClick={function(e){e.preventDefault();   this.props.onChangePage(e.target.dataset.id);}.bind(this)}>{data[i].title}</a></li>);
        
        
        i= i + 1;

      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
      </nav>
  
  
      );
  
    }
  
  }

export default TOC;//가져다 쓰는 사람들이 export 코드를 통해 TOC 클래스를 사용할 수 있게 된다. 