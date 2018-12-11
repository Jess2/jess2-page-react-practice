import React, { Component } from 'react';
import './List.scss';
import Article from 'components/article/Article';
import Pagination from 'components/pagination/Pagination';

import articleData from '../../utilities/articleData.json';

export default class List extends Component {
  state = {
    readMode: false,
    articleId: 0,
    pageLength: 0,
    articleLengthPerPage: 5, // 한 페이지당 게시물 몇 개씩 보여줄지
    currentShowArticles: [],
    currentPage: 0,
    articles: articleData
  }
  componentDidMount = async () => {
    await this.setState({
      pageLength: this.state.articles.length / this.state.articleLengthPerPage
    })
    await this.setState({
      articles: this.state.articles.reverse()
    })
    await this.setCurrentPage(this.state.currentPage)
  }
  modeChange = (e) => {
    this.state.articleId = e.target.id;
    this.setState({
      readMode: !this.state.readMode
    })
  }
  setCurrentPage = (id) => {
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