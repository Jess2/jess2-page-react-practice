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
        <h1 className="themeName">{this.props.themeName} 글쓰기</h1>

        {/* 글 작성 */}
        <div className="writeSection">
          <h4>Markdown</h4><hr/>
          <textarea
            value={this.state.contents}
            onChange={this.contentsChange}
          />
        </div>

        {/* 글 작성 미리보기 */}
        <div className="markdownSection">
          <h4>Preview</h4><hr/>
          <div className="preview">
            <ReactMarkdown source={this.state.contents} />
          </div>
        </div>
        <br/>
        <button className="cancel" onClick={this.props.onModeChange}>취소</button>
        <button onClick={this.props.onModeChange}>저장하기</button>
      </div>
    )
  }
}