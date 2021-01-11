import React, { Component} from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import { Input } from 'antd';
class Control extends Component{
    render(){
      console.log('Content render')
      return(
        <ul>
            <li>
            <Input placeholder="입력" />
            </li>
            <li><a href= '/create' onClick={function (e) {e.preventDefault();
            this.props.onChangeMode('create');
                
            }.bind(this)}>create</a></li>
            <li><a href= '/update' onClick={function (e) {e.preventDefault();
            this.props.onChangeMode('update');
                
            }.bind(this)}>update</a></li>
            <li><Button onClick={function (e) {e.preventDefault();
            this.props.onChangeMode('delete');
                
            }.bind(this)} type='primary' danger >delete</Button></li>
       
        </ul>
      );
    
    }
  
  
  }

export default Control;