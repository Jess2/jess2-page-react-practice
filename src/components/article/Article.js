import React, { Component } from 'react';
import './Article.scss';

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        <h1>onclick과 addEventListener 비교</h1>
        <p>2018-12-03</p>
        <div>
          내용~<br/>
          sdkjlf
          sl;dofj
        </div>
      </div>
    );
  }
}