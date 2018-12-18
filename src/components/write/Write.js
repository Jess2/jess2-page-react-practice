import React, { Component } from 'react';
import './Write.scss';

const ReactMarkdown = require('react-markdown')

export default class Pagination extends Component {
  state = {
    input: '# This is a header\n\nAnd this is a paragraph',
    // isActivePage: false,
  }
  componentDidMount() {
    console.log('write componentDidMount')
  }
  componentDidUpdate() {
    console.log('write ComponentDidUpdate')
  }
  render() {
    return (
      <div className="writeWrapper">
        <ReactMarkdown source={this.state.input} />
        <button onClick={this.props.onModeChange}>취소</button>
        <button onClick={this.props.onModeChange}>저장</button>
      </div>
    )
  }
}