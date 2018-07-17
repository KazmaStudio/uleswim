import React, { Component } from 'react';
import './index.less';

let courseList = [
    {
        name: "青少年",
        id: "teenage",
        description: "中考冲刺 / 兴趣培养",
        course: [{
            name: "兴趣班",
            description: "1 ~ 3人兴趣班",
            feature: [{
                name: "上课时间灵活"
            },{
                name: "男女教练可选"
            },{
                name: "持证教练"
            },{
                name: "课程内容系统实用"
            },{
                name: "教练经验丰富"
            },{
                name: "1~3人小班"
            }]
        },{
            name: "中考满分班",
            description: "中考满分班",
            feature: [{
                name: "须有游泳基础",
                warning: true
            },{
                name: "95%达标率"
            },{
                name: "持证教练"
            },{
                name: "课程内容针对中考"
            },{
                name: "教练经验丰富"
            }]
        },{
            name: "考前冲刺班",
            description: "考前冲刺班",
            feature: [{
                name: "持证教练"
            },{
                name: "课程内容针对中考"
            },{
                name: "教练经验丰富"
            },{
                name: "男女教练可选"
            },{
                name: "上课时间灵活"
            },{
                name: "仅接受初三学生报名",
                warning: true
            },{
                name: "1~3人小班"
            }]
        }]
    },
    {
        name: "亲子",
        id: "PC",
        description: "家庭 · 成长 · 陪伴",
        course: [{
            name: "家庭班",
            description: "2 ~ 3人家庭班",
            feature: [{
                name: "亲子陪伴共同上课"
            },{
                name: "持证教练"
            },{
                name: "课程内容系统实用"
            },{
                name: "教练经验丰富"
            },{
                name: "男女教练可选"
            },{
                name: "上课时间灵活"
            },{
                name: "以家庭为单位私人教学"
            }]
        }]
    },
    {
        name: "成人",
        id: "adults",
        description: "1~3人私人班 / 丽人班",
        course: [{
            name: "私人班",
            description: "1~3人私人班",
            feature: [{
                name: "持证教练"
            },{
                name: "课程内容系统实用"
            },{
                name: "教练经验丰富"
            },{
                name: "男女教练可选"
            },{
                name: "上课时间灵活"
            },{
                name: "1~3人小班"
            }]
        },{
            name: "丽人班",
            description: "丽人班",
            feature: [{
                name: "课程时间固定"
            },{
                name: "滚动开班"
            },{
                name: "持证教练"
            },{
                name: "课程内容系统实用"
            },{
                name: "教练经验丰富"
            },{
                name: "女性教练"
            },{
                name: "仅女性学员可报名",
                warning: true
            }]
        },{
            name: "普通班",
            description: "普通班",
            feature: [{
                name: "课程时间固定"
            },{
                name: "滚动开班"
            },{
                name: "持证教练"
            },{
                name: "课程内容系统实用"
            },{
                name: "教练经验丰富"
            }]
        }]
    }
]

class HomeMb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseList: courseList
        };
    }

    componentDidMount() {

    }

    handleTypeClick(event) {
        document.getElementById('adults').classList.remove('home-type-content-left');
        document.getElementById('PC').classList.remove('home-type-content-left');
        document.getElementById('teenage').classList.remove('home-type-content-left');
        document.getElementById('adults').nextElementSibling.classList.remove('type-sub-left');
        document.getElementById('PC').nextElementSibling.classList.remove('type-sub-left');
        document.getElementById('teenage').nextElementSibling.classList.remove('type-sub-left');
        event.currentTarget.classList.add('home-type-content-left');
        event.currentTarget.nextElementSibling.classList.add('type-sub-left');
    }

    handleCourseClick(feature, event){
        event.currentTarget.classList.add('type-sub-class-touch-down');
        var path = {
            pathname:'/Course',
            query:{
                courseName: event.currentTarget.getAttribute("courseName"),
                courseType: event.currentTarget.getAttribute("courseType"),
                feature: feature
            },
        }
        this.props.history.push(path);
    }

  render () {
  	return (
        <div id = "HomeMb" class = "page">
            {courseList.map((item) => {
                return (
                    <div class = {"home-type-"+item.id+" home-type"}>
                        <div class = "home-type-content" id = {item.id}>
                            <div class = "type-cn">{item.name}</div>
                            <div class = "type-en">{item.description}</div>
                        </div>
                        <div class = "type-sub">
                            {item.course.map((subItem) => {
                                return (
                                    <div class = "type-sub-class" onClick={this.handleCourseClick.bind(this, subItem.feature)} courseType = {item.name} courseName = {subItem.name}>{subItem.description}</div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
  }
}

export default HomeMb;
