import React, { Component } from 'react';
import './Pagination.scss';

export default class Pagination extends Component {
  state = {
    // isActivePage: false,
  }
  componentDidMount() {
    console.log('pagination componentDidMount')
  }
  paginator = () => {
    let table = []
    for (let i=0; i<1; i++) {
      let children = []
      children.push(<td onClick={this.prevPage}>＜</td>)
      for (let j=0; j<this.props.pageLength; j++) {
        children.push(<td id={j} onClick={this.pageActive} className={`${j === 0 && 'activePagination'}`}>{`${j+1}`}</td>)
      }
      children.push(<td onClick={this.nextPage}>＞</td>)
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  pageActive = (e) => {
    this.props.setCurrentPage(e.target.id)
    for (let i=0; i<e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].className = ''
    }
    e.target.className = 'activePagination'
  }
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