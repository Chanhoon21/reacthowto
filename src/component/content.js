import React from 'react'

const Content = ({title, desc})=> {
  return(
    <article>
      <h2> {title}</h2>
      {desc}
    </article>

);

}
export default Content;


/* 
import React, { Component} from 'react';

class Content extends Component{
    render(){
      console.log('Content render')
      return(
        <article>
         <h2>{this.props.title}</h2>
          {this.props.desc}
  
      </article>
      );
    
    }
  
  
  }
 */