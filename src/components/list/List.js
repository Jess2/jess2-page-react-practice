import React, { Component } from 'react';
import './List.scss';
import Article from 'components/article/Article';
import Pagination from 'components/pagination/Pagination';

export default class List extends Component {
  state = {
    readMode: false,
    articleId: 0,
    pageLength: 0,
    articleLengthPerPage: 5, // 한 페이지당 게시물 몇 개씩 보여줄지
    currentShowArticles: [],
    articles: [
      {
        id: 1,
        title: "크로스 도메인(Cross Domain)",
        date: "2018-12-01",
      },
      {
        id: 2,
        title: "null과 undefined 비교",
        date: "2018-12-01",
      },
      {
        id: 3,
        title: "이벤트 버블링과 이벤트 캡쳐링",
        date: "2018-12-02",
      },
      {
        id: 4,
        title: "호이스팅(Hoisting)",
        date: "2018-12-02",
      },
      {
        id: 5,
        title: "onclick과 addEventListener 비교",
        date: "2018-12-03",
      },
      {
        id: 6,
        title: "여섯 번째 글",
        date: "2018-12-11",
      },
      {
        id: 7,
        title: "일곱 번째 글",
        date: "2018-12-11",
      },
      {
        id: 8,
        title: "8 번째 글",
        date: "2018-12-11",
      },
      {
        id: 9,
        title: "9 번째 글",
        date: "2018-12-11",
      },
      {
        id: 10,
        title: "10 번째 글",
        date: "2018-12-11",
      },
      {
        id: 11,
        title: "11 번째 글",
        date: "2018-12-11",
      },
      {
        id: 12,
        title: "12 번째 글",
        date: "2018-12-11",
      },
      {
        id: 13,
        title: "13 번째 글",
        date: "2018-12-11",
      },
      {
        id: 14,
        title: "14 번째 글",
        date: "2018-12-11",
      },
      {
        id: 15,
        title: "15 번째 글",
        date: "2018-12-11",
      },
    ]
  }
  componentDidMount = async () => {
    await this.setState({
      pageLength: this.state.articles.length / this.state.articleLengthPerPage
    })
    await this.setState({
      articles: this.state.articles.reverse()
    })
    await this.setCurrentPage(0)
  }
  modeChange = (e) => {
    this.state.articleId = e.target.id;
    this.setState({
      readMode: !this.state.readMode
    })
  }
  // reverseArticle = () => {
  //   this.setState({
  //     this.state.article.reverse()
  //   })
  // }
  setCurrentPage = (id) => {
    console.log('setCurrentPage', id, typeof id)
    this.setState({
      currentShowArticles: [ ...this.state.articles.slice(parseInt(id)*this.state.articleLengthPerPage, this.state.articleLengthPerPage*(parseInt(id)+1)) ]
    })
  }
  render() {
    const articles = this.state.currentShowArticles.map(
      ({id, title, date}, i) => (
        <li id={id} onClick={this.modeChange} key={i}>
          <span className="liNumber">{id}</span>
          {title}
          <span className="liDate">{date}</span>
        </li>
      )
    )
    return (
      <div>
        {
          this.state.readMode === false ?
            <div className="List">
              <h1>JavaScript</h1>
              <p>게시물 수: {this.state.articles.length}</p>
              <ul>
                {articles}
              </ul>
              <Pagination
                pageLength={this.state.pageLength}
                setCurrentPage={this.setCurrentPage}
              />
            </div>
          :
          <Article
            onArticleId={this.state.articleId}
            onModeChange={this.modeChange}
          />
        }
      </div>
    );
  }
}