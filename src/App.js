import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topHeader">
          <span className="lang">
            KR&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;EN
          </span>
          <span className="pdf">
            Export to PDF
          </span>
        </div>
        <header>
          <div>
            Frontend Developer<br/>
            <h3>Jess2's Page</h3>
          </div>
        </header>
        <nav>
          <table>
            <tr>
              <td className="active">About</td>
              <td>Work</td>
              <td>Project</td>
              <td>Blog</td>
              <td>Activity</td>
              <td>Skills</td>
              <td>Education</td>
              <td>Awards</td>
            </tr>
          </table>
        </nav>
        <div className="body">
          
        </div>
        <footer>
          Copyright Jess2
        </footer>
      </div>
    );
  }
}

export default App;
