import React, { Component } from 'react';
import './index.less';

let poolList = [{
    district: "杨浦",
    name: "中原体育场游泳馆",
    address: "上海市开鲁路518号",
    traffic: {
        lineNumber: ["8"],
        station: "市光路站"
    }
},{
    district: "杨浦",
    name: "杨浦温水泳池",
    address: "上海市打虎山路19号",
    traffic: {
        lineNumber: ["8"],
        station: "鞍山新村站"
    }
},{
    district: "虹口",
    name: "虹口游泳馆",
    address: "上海市东江湾路444号",
    traffic: {
        lineNumber: ["8"],
        station: "虹口足球场站"
    }
},{
    district: "黄浦",
    name: "格致中学游泳馆",
    address: "上海市北海路150号",
    traffic: {
        lineNumber: ["1", "2", "8"],
        station: "人民广场站"
    }
},{
    district: "静安",
    name: "闸北游泳馆",
    address: "上海市中华新路482号",
    traffic: {
        lineNumber: ["8"],
        station: "中兴路站"
    }
},{
    district: "徐汇",
    name: "徐汇游泳馆",
    address: "上海市枫林路315号",
    traffic: {
        lineNumber: ["4","7"],
        station: "东安路站"
    }
},{
    district: "浦东",
    name: "浦东游泳馆",
    address: "上海市浦东南路3669号",
    traffic: {
        lineNumber: ["7"],
        station: "云台路站"
    }
},{
    district: "浦东",
    name: "浦东游泳馆（源深馆）",
    address: "上海市张扬路1458号",
    traffic: {
        lineNumber: ["6"],
        station: "源深体育中心站"
    }
}]

class CourseMb extends Component {
    constructor(props) {
        super(props);
        this.props.query = this.props.location.query
        this.state = {
            query: this.props.query
        };
    }

    componentDidMount() {
        //this.props.location.query
    }

  render () {
  	return (
        <div id = "CourseMb" class = "Course">
            <div id = "banner" class = "banner">
                <div id = "bannerBg" class = "banner-bg">
                    <div id = "bannerLeft" class = "banner-left">
                        <div id = "bannerCourseType" class = "banner-course-type">{this.state.query.courseType}</div>
                        <div id = "bannerCourseName" class = "banner-course-name">{this.state.query.courseName}</div>
                    </div>
                    <div id = "bannerRight" class = "banner-right">
                        {this.state.query.feature.map((item) => {
                            return (
                                <div class = {"banner-feature" + (item.warning ? " banner-feature-warning" : "")}>{item.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div id = "poolList" class = "pool-list">
                <div id = "poolLabel" class = "pool-label">场馆列表（当前仅支持上海场馆）</div>
                <div id = "poolTable" class = "pool-table">
                    {poolList.map((item) => {
                        return (
                            <div class = "pool-row">
                                <div class = "pool-district">{item.district}&nbsp;|&nbsp;</div>
                                <div class = "pool-name">{item.name}</div>
                                <div class = "pool-address">{item.address}</div>
                                <div class = "pool-line">
                                    {item.traffic.lineNumber.map((number) => {
                                        return (
                                            <span class = {"line-"+number}>{number}</span>
                                        )
                                    })}
                                </div>
                                <div class = "pool-station">{item.traffic.station}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id = "delegate" class = "delegate">
                <div id = "delegateLabel" class = "delegate-label">学员须知</div>
                <div id = "delegateTable" class = "delegate-table">
                    <div class = "delegate-row">
                        <div class = "delegate-sub-title"><div>训练及安全</div></div>
                        <div class = "delegate-detail-list">
                            <div class = "delegate-detail">学员如有疾病或特殊体质，应在课前告知教练；</div>
                            <div class = "delegate-detail">十二岁以内的儿童应佩戴浮板，背漂等救生辅助装备，家长应陪同接送，并在换洗淋浴时给予照料（部分泳池不允许家长陪同，家长需自行购票进入）；</div>
                            <div class = "delegate-detail">初学者仅限在浅水区活动，严禁擅自脱离教练视线单独行动。</div>
                        </div>
                    </div>
                    <div class = "delegate-row delegate-bg">
                        <div class = "delegate-sub-title"><div>课时及质量</div></div>
                        <div class = "delegate-detail-list">
                            <div class = "delegate-detail">各游泳馆对入场时间有一定限制且不同，课程分为五次，六次或者七次。（超时请自行补票）；</div>
                            <div class = "delegate-detail">初学者以蛙泳为起点，以能够自行游15米为包会标准（一期课程只包含一种泳姿学习）；</div>
                            <div class = "delegate-detail">对十二岁以上及成人均承诺包会，因儿童身体发育及心理均不成熟，出于负责的态度，十二岁以内的儿童无法做出包会承诺；</div>
                            <div class = "delegate-detail">如在规定时间内未能学会者，均可在两周内向客服提出补课申请，免费参加正在进行的日常班课程（补课门票需自理）；</div>
                        </div>
                    </div>
                    <div class = "delegate-row">
                        <div class = "delegate-sub-title"><div>请假及时效</div></div>
                        <div class = "delegate-detail-list">
                            <div class = "delegate-detail">为了保证教学质量，所有课程有效期均为两个月；</div>
                            <div class = "delegate-detail">在课程内最多可请假三次，请假应至少提前24小时向教练提出申请。未提前24小时请假、无故缺课或迟到半小时以上视为旷课，不安排补课并不再承诺包会；</div>
                        </div>
                    </div>
                    <div class = "delegate-row delegate-bg">
                        <div class = "delegate-sub-title"><div>售后及退款</div></div>
                        <div class = "delegate-detail-list">
                            <div class = "delegate-detail">前三次课（含第三次）内提出退款申请，我们将扣除已上课程费用，以及学费15%的手续费后，退回剩余课款；</div>
                            <div class = "delegate-detail">课程开始第四次以后，或超出有效期，均无法受理退款申请。</div>
                        </div>
                    </div>
                    <div class = "delegate-row">
                        <div class = "delegate-sub-title"><div>其他</div></div>
                        <div class = "delegate-detail-list">
                            <div class = "delegate-detail">报名成功后即认为同意以上条款。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default CourseMb;
