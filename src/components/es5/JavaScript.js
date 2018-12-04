import React, { Component } from 'react';
import './JavaScript.scss';
import Article from 'components/article/Article';

export default class JavaScript extends Component {
  state = {
    readMode: false,
    articleId: 0,
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
    ]
  }
  modeChange = (e) => {
    this.state.articleId = e.target.id;
    this.setState({
      readMode: !this.state.readMode
    })
  }
  render() {
    const articles = this.state.articles.reverse().map(
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
          <div className="JavaScript">
          <h1>JavaScript</h1>
          <p>게시물 수: {articles.length}</p>
          <ul>
            {articles}
          </ul>
  
          <div className="paginationWrapper">
            <table className="pagination">
              <tbody>
                <tr>
                  <td className="activePagination">1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>></td>
                </tr>
              </tbody>
            </table>
          </div>
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