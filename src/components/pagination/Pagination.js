import React, { Component } from 'react';
import './Pagination.scss';

export default class Pagination extends Component {
  state = {
    // isActivePage: false,
  }
  componentDidMount() {
    console.log('pagination componentDidMount')
  }
  componentDidUpdate() {
    console.log('pagination ComponentDidUpdate')

    // this.props.setCurrentPage(0)
  }
  paginator = () => {
    console.log('==================paginator')
    let table = []
    for (let i=0; i<1; i++) {
      let children = []
      children.push(<td onClick={this.prevPage}><i className="fa fa-angle-left" aria-hidden="true"></i></td>)
      for (let j=0; j<this.props.pageLength; j++) {
        children.push(<td id={j} onClick={this.pageActive} className={`${j === 0 && 'activePagination'}`}>{`${j+1}`}</td>)
      }
      children.push(<td onClick={this.nextPage}><i className="fa fa-angle-right" aria-hidden="true"></i></td>)
      table.push(<tr>{children}</tr>)
    }
    console.log(table)
    return table
  }
  pageActive = (e) => {
    console.log(e.target.id)
    this.props.setCurrentPage(e.target.id)
    for (let i=0; i<e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].className = ''
    }
    e.target.className = 'activePagination'
  }
  // 이전 페이지로 이동
  prevPage = (e) => {
    for (let i=2; i<e.target.parentNode.children.length; i++) {
      if (e.target.parentNode.children[i].className === 'activePagination') {
        e.target.parentNode.children[i].className = ''
        e.target.parentNode.children[i-1].className = 'activePagination'
        this.props.setCurrentPage(e.target.parentNode.children[i-1].id)
        break;
      }
    }
  }
  // 다음 페이지로 이동
  nextPage = (e) => {
    for (let i=0; i<e.target.parentNode.children.length-2; i++) {
      if (e.target.parentNode.children[i].className === 'activePagination') {
        e.target.parentNode.children[i].className = ''
        e.target.parentNode.children[i+1].className = 'activePagination'
        this.props.setCurrentPage(e.target.parentNode.children[i+1].id)
        break;
      }
    }
  }
  render() {
    return (
      <div className="paginationWrapper">
        <table className="pagination">
          <tbody>
            {this.paginator()}
          </tbody>
        </table>
      </div>
    )
  }
}