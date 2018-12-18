import React, { Component } from 'react';
import './Write.scss';

const ReactMarkdown = require('react-markdown')

export default class Pagination extends Component {
  state = {
    input: '# This is a header\n\nAnd this is a paragraph',
    contents: '',
  }
  componentDidMount() {
    console.log('write componentDidMount')
  }
  componentDidUpdate() {
    console.log('write ComponentDidUpdate')
  }
  contentsChange = (e) => {
    this.setState({
      contents: e.target.value
    })
  }
  render() {
    return (
      <div className="writeWrapper">
        <h1 className="themeName">{this.props.themeName}</h1>

        {/* 글 작성 */}
        <textarea
          value={this.state.contents}
          onChange={this.contentsChange}
        />

        {/* 글 작성 미리보기 */}
        <div className="markdownWrapper">
          <h2>미리보기</h2>
          <ReactMarkdown source={this.state.contents} />
        </div>
        <br/>
        <button className="cancel" onClick={this.props.onModeChange}>취소</button>
        <button onClick={this.props.onModeChange}>저장하기</button>
      </div>
    )
  }
}