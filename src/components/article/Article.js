import React, { Component } from 'react';
import './Article.scss';
import articleData from '../../utilities/articleData.json';


export default class Article extends Component {
  state = {
    contents: "안녕하세요! 테스트 중입니다.",
    articles: articleData,
  }
  render() {
    const article = this.state.articles.filter(article => article.id === parseInt(this.props.onArticleId))
    console.log(article)
    return (
      <div className="article">
        <h3 onClick={this.props.onModeChange}><i className="fa fa-arrow-circle-left"></i> 목록으로 돌아가기</h3>
        <h1>{article[0].title}</h1>
        <p>{article[0].date}</p>
        <textarea
          readOnly
          value={article[0].contents}
        />
      </div>
    );
  }
}

// const input = '# This is a header\n\nAnd this is a paragraph'
 
// ReactDOM.render(
//   <ReactMarkdown source={input} />,
//   document.getElementById('container')
// )