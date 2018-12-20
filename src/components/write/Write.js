import React, { Component } from 'react';
import './Write.scss';

const ReactMarkdown = require('react-markdown')

export default class Pagination extends Component {
  state = {
    input: '# This is a header\n\nAnd this is a paragraph',
    contents: '',
    markdownClass: '',
    previewClass: '',
    originClass: '',
  }
  componentDidMount() {
    console.log('write componentDidMount')
    window.scrollTo(0,0);
  }
  componentDidUpdate() {
    console.log('write ComponentDidUpdate')
    // window.scrollTo(0,0);
  }
  contentsChange = (e) => {
    this.setState({
      contents: e.target.value
    })
  }
  // 마크다운 섹션 확대
  enlargeMarkdown = () => {
    console.log('enlargeMarkdown')
    this.setState({
      markdownClass: 'markdownClass',
      previewClass: '',
      originClass: '',
    })
  }
  // 미리보기 섹션 확대
  enlargePreview = () => {
    console.log('enlargePreview')
    this.setState({
      markdownClass: '',
      previewClass: 'previewClass',
      originClass: '',
    })
  }
  // 원래대로
  setOriginVersion = () => {
    console.log('setOriginVersion')
    this.setState({
      markdownClass: '',
      previewClass: '',
      originClass: 'originClass',
    })
  }
  render() {
    return (
      <div className="writeWrapper">
        <h1 className="themeName">{this.props.themeName}</h1>
        <button className="cancel" onClick={this.props.onModeChange}>취소</button>
        <button onClick={this.props.onModeChange}>저장하기</button>
        <div className="changeSectionButton">
          <button onClick={this.enlargeMarkdown}>Markdown 확대</button>
          <button onClick={this.enlargePreview}>Preview 확대</button>
          <button onClick={this.setOriginVersion}>원래대로</button>
        </div>

        {/* 글 작성 */}
        <div className={`writeSection ${this.state.markdownClass} ${this.state.previewClass} ${this.state.originClass}`}>
          <div className="writeHeader">
            <h4>Markdown</h4>
          </div>
          <textarea
            value={this.state.contents}
            onChange={this.contentsChange}
          />
        </div>

        {/* 글 작성 미리보기 */}
        <div className={`markdownSection ${this.state.markdownClass} ${this.state.previewClass} ${this.state.originClass}`}>
          <div className="markdownHeader">
            <h4>Preview</h4>
          </div>
          <div className="preview">
            <ReactMarkdown source={this.state.contents} />
          </div>
        </div>
        <br/>

        <p className="buttonWrapper">
          
        </p>
      </div>
    )
  }
}