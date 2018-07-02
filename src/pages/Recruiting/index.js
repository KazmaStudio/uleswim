import React, { Component } from 'react';
import qr_code from '../../resource/image/wx_qr.png'
import './index.less'

class Recruiting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

  render () {
  	return (
        <div id = "Recruiting" class = "page">
            <div class = "recruiting-grid">
                <div class = "recruiting-condition">
                    <div class = "condition-detail">年龄<span class = "recuriting-detail-span">三十五</span>周岁及以下</div>
                    <div class = "condition-detail">需持有<span class = "recuriting-detail-span">教练证</span>及<span class = "recuriting-detail-span">救生证</span></div>
                </div>
                <div class = "recruiting-QR"><img src = {qr_code}></img></div>
                <div class = "recruiting-intro">
                    <div class = "recruiting-main">搜索添加微信号：holyoops_cu，或扫描以上二维码添加</div>
                    <div class = "recuriting-sub">添加时请备注： <span class = "recuriting-sub-span">[姓名] 教练应聘</span>， 例如：<span class = "recuriting-sub-span">张三 教练应聘</span></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Recruiting;
