import React, { Component } from 'react';
import './index.less';
import {Switch, Route} from 'react-router-dom'
import ToolBar from '../../components/ToolBar';
import Home from '../Home';
import HomeMb from '../HomeMb';
import Recruiting from '../Recruiting';
import Course from '../Course';
import CourseMb from '../CourseMb';
import {isPC} from '../../common/common.js';

class Grid extends Component {
    constructor(props) {
        super(props);

        document.addEventListener(
            'touchmove',
            function(e) {
                e.preventDefault();
            },
            false
        );

        this.state = {

        };
    }

    componentDidMount() {
        console.log(isPC());
    }

  render () {
  	return (
        <div id = "Grid">
            <div id = "GridTop" class = "grid-top">
                <ToolBar />
            </div>
            <div id = "GridPages" class = "grid-pages">
                <Switch>
                    <Route exact path='/' component={ isPC()?Home:HomeMb }/>
                    <Route path='/Recruiting' component={ Recruiting }/>
                    <Route path='/Course' component={ isPC()?Course:CourseMb }/>
                </Switch>
            </div>
        </div>
    );
  }
}
export default Grid;
