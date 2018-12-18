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
    articleLengthPerPage: 3, // 한 페이지당 게시물 몇 개씩 보여줄지
    currentShowArticles: [],
    currentPage: 0,
    articles: articleData,
    themeArticles: articleData,
  }
  // 처음 마운트될 때 -> 게시판별 게시글 분리, 게시판 게시글별 페이지수 계산
  componentDidMount = async () => {
    console.log('componentDidMount')
    await this.setState({
      themeArticles: this.state.articles.filter(data => data.themeId == this.props.themeId).reverse()
    })
    await this.setState({
      pageLength: this.state.themeArticles.length / this.state.articleLengthPerPage
    })
    await this.setCurrentPage(this.state.currentPage)
  }
  // 업데이트 될 때 -> 게시판 아이디가 달라질 경우, 게시판별 게시글 다시 분리, 게시판 게시글별 페이지수 다시 계산
  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.themeId !== prevProps.themeId) {
      console.log('componentDidUpdate')
      await this.setState({
        ...this.state,
        themeArticles: this.state.articles.filter(data => data.themeId == this.props.themeId).reverse()
      })
      await this.setState({
        ...this.state,
        pageLength: this.state.themeArticles.length / this.state.articleLengthPerPage
      })
      await this.setCurrentPage(this.state.currentPage)
    }
  }
  // 게시글 리스트 모드, 읽기 모드 변경
  modeChange = (e) => {
    this.state.articleId = e.target.id;
    this.setState({
      readMode: !this.state.readMode
    })
  }
  // 현재 보여줄 게시글 목록 계산
  setCurrentPage = (id) => {
    this.setState({
      currentShowArticles: [ ...this.state.themeArticles.slice(parseInt(id)*this.state.articleLengthPerPage, this.state.articleLengthPerPage*(parseInt(id)+1)) ]
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
              <h1>{this.props.themeName}</h1>
              <p>게시물 수: {this.state.themeArticles.length}</p>
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