import React, { Component } from 'react';
import './Pagination.scss';

export default class Pagination extends Component {
  state = {
    paginationRange: 5,
    isActivePage: false,
  }
  paginator = () => {
    let table = []
    for (let i=0; i<1; i++) {
      let children = []
      for (let j=0; j<this.state.paginationRange; j++) {
        children.push(<td onClick={this.pageActive}>{`${j+1}`}</td>)
      }
      children.push(<td onClick={this.nextPage}>></td>)
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  pageActive = (e) => {
    for (let i=0; i<e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].className = ''
    }
    e.target.className = 'activePagination'
    this.setState({
      isActivePage: true
    })
  }
  nextPage = (e) => {
    for (let i=0; i<e.target.parentNode.children.length-1; i++) {
      if (e.target.parentNode.children[i].className === 'activePagination') {
        e.target.parentNode.children[i].className = ''
        e.target.parentNode.children[i+1].className = 'activePagination'
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