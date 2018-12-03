import React, { Component } from 'react';
import './JavaScript.scss';
import Article from 'components/article/Article';

export default class JavaScript extends Component {
  state = {
    readMode: false,
  }
  modeChange = () => {
    this.setState({
      readMode: !this.state.readMode
    })
  }
  render() {
    return (
      <div>
        {
          this.state.readMode === false ?
          <div className="JavaScript">
          <h1>JavaScript</h1>
          <p>게시물 수: 5</p>
          <ul>
            <li onClick={this.modeChange}><span className="liNumber">5</span>onclick과 addEventListener 비교<span className="liDate">2018-12-03</span></li>
            <li><span className="liNumber">4</span>호이스팅(Hoisting)<span className="liDate">2018-12-03</span></li>
            <li><span className="liNumber">3</span>이벤트 버블링과 이벤트 캡쳐링<span className="liDate">2018-12-03</span></li>
            <li><span className="liNumber">2</span>null과 undefined 비교<span className="liDate">2018-12-03</span></li>
            <li><span className="liNumber">1</span>크로스 도메인(Cross Domain)<span className="liDate">2018-12-03</span></li>
          </ul>
  
          <div className="paginationWrapper">
            <table className="pagination">
              <tr>
                <td className="activePagination">1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>></td>
              </tr>
            </table>
          </div>
        </div>
        :
        <Article/>
        }
        
      </div>
    );
  }
}