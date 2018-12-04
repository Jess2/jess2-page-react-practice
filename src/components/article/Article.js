import React, { Component } from 'react';
import './Article.scss';

export default class Article extends Component {
  state = {
    contents: "안녕하세요! 테스트 중입니다."
  }
  render() {
    return (
      <div className="article">
        <h3 onClick={this.props.onModeChange}><i className="fa fa-arrow-circle-left"></i> 목록으로 돌아가기</h3>
        <h1>onclick과 addEventListener 비교</h1>
        <p>2018-12-03</p>
        <textarea
          readOnly
          value={this.state.contents}
        />
      </div>
    );
  }
}