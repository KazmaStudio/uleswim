import React, { Component } from 'react';
import './index.less';

class CourseSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

  render () {
  	return (
        <div id = "CourseSearch" class = "page">
          <div id = "CourseSearchBg" class = "course-search-bg">
              <div id = "CourseSearchCourseTypeList" class = "course-search-course-type-list">
                  <div id = "CourseSearchCellSolo" class = "course-search-cell course-search-cell-solo">
                      <div class = "course-search-cell-name">1 对 1</div>
                      <div class = "course-search-cell-feature">
                          <div class = "course-search-feature-type">VIP</div>
                          <div class = "course-search-feature-type">私人教学</div>
                      </div>
                  </div>
                  <div id = "CourseSearchCellCouple" class = "course-search-cell course-search-cell-couple">
                      <div class = "course-search-cell-name">1 对 2</div>
                      <div class = "course-search-cell-feature">
                          <div class = "course-search-feature-type">情侣</div>
                          <div class = "course-search-feature-type">私人教学</div>
                          <div class = "course-search-feature-type">亲子</div>
                          <div class = "course-search-feature-type">VIP</div>
                      </div>
                  </div>
                  <div id = "CourseSearchCellFamily" class = "course-search-cell course-search-cell-family">
                      <div class = "course-search-cell-name">1 对 3</div>
                      <div class = "course-search-cell-feature">
                          <div class = "course-search-feature-type">家庭</div>
                          <div class = "course-search-feature-type">亲友</div>
                          <div class = "course-search-feature-type">亲子</div>
                          <div class = "course-search-feature-type">VIP</div>
                          <div class = "course-search-feature-type">私人教学</div>
                      </div>
                  </div>
                  <div id = "CourseSearchCellGirls" class = "course-search-cell course-search-cell-girls">
                      <div class = "course-search-cell-name">丽人班</div>
                      <div class = "course-search-cell-feature">
                          <div class = "course-search-feature-type">亲友</div>
                          <div class = "course-search-feature-type">3~6人</div>
                          <div class = "course-search-feature-type">女性教练</div>
                      </div>
                  </div>
                  <div id = "CourseSearchCellOrdinary" class = "course-search-cell course-search-cell-ordinary">
                      <div class = "course-search-cell-name">普通班</div>
                      <div class = "course-search-cell-feature">
                          <div class = "course-search-feature-type">优质服务</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default CourseSearch;
