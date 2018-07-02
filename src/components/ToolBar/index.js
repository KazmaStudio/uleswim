import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.less';
import logo from '../../resource/image/logo_hor.png'


class ToolBar extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.location.query
    }

    render () {
  	     return (
            <div id = "ToolBar">
              <div id = "ToolBarLogo" class = "tool-bar-logo"><Link to="/" class = "tool-bar-link"><img src = {logo}/></Link></div>
              <div id = "ToolBarLinkList" class = "tool-bar-link-list">
                  <Link to="/Recruiting" class = "tool-bar-link">教练招聘</Link>
                  <Link to="/" class = "tool-bar-link link-home">首页</Link>
              </div>
            </div>
        );
    }

}

export default ToolBar;
