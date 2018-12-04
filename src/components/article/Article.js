import React, { Component } from 'react';
import './Article.scss';

export default class Article extends Component {
  state = {
    contents: "안녕하세요! 테스트 중입니다.",
    articles: [
      {
        id: 1,
        title: "크로스 도메인(Cross Domain)",
        date: "2018-12-01",
        contents: "안녕하세요! 크로스 도메인에 대해서 알아봅시다.",
      },
      {
        id: 2,
        title: "null과 undefined 비교",
        date: "2018-12-01",
        contents: "안녕하세요! null과 undefined에 대해서 알아봅시다.",
      },
      {
        id: 3,
        title: "이벤트 버블링과 이벤트 캡쳐링",
        date: "2018-12-02",
        contents: "안녕하세요! 이벤트 버블링과 캡쳐링에 대해서 알아봅시다."
      },
      {
        id: 4,
        title: "호이스팅(Hoisting)",
        date: "2018-12-02",
        contents: "안녕하세요! 호이스팅에 대해서 알아봅시다.",
      },
      {
        id: 5,
        title: "onclick과 addEventListener 비교",
        date: "2018-12-03",
        contents: "안녕하세요! onclick과 addEventListener에 대해서 알아봅시다.",
      },
    ]
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