import React, { Component } from 'react';
import './App.scss';
import Typing from 'react-typing-animation';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="headerTop">
            <span className="lang">
              KR&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;EN
            </span>
            <span className="contactMe">
              Contact Me
            </span>
          </div>
          <div className="headerBody">
            <Typing>
              <span>Frontend Developer</span>
              <h1>Jess2's Profile</h1>
              <Typing.Reset count={1} />
            </Typing>
          </div>
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
        </div>

        <div className="contents">
          <About/>
        </div>
        <div className="footer">
          Copyright Jess2
        </div>
      </div>
    );
  }
}

export default App;