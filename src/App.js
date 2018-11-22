import React, { Component } from 'react';
import './App.scss';
import Typing from 'react-typing-animation';
import About from './components/about/About';
import Work from './components/work/Work';
import Project from './components/project/Project';
import Blog from './components/blog/Blog';
import Activity from './components/activity/Activity';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Awards from './components/awards/Awards';

class App extends Component {
  state = {
    isActive: [
      { id: 0, active: true },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false }
    ],
  }
  // active 값이 true이면, 새 객체를 만들고 기존의 내용을 집어넣고 원하는 값 덮어쓰기
  // 바꿀 필요 없는 것들은 그냥 기존 값 사용
  setActive = async (e) => {
    console.log(e.target.id)
    let _id =e.target.id;
    await this.setState({
      isActive: this.state.isActive.map(
        data => data.active === true ? {...data, active: false} : data
      )
    });
    await this.setState({
      isActive: this.state.isActive.map(
        data => data.id == _id ? {...data, active: true} : data
      )
    });
  }
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
              <tbody>
                <tr>
                  <td id="0" onClick={this.setActive} className={`${this.state.isActive[0].active && 'active'}`}>About</td>
                  <td id="1" onClick={this.setActive} className={`${this.state.isActive[1].active && 'active'}`}>Work</td>
                  <td id="2" onClick={this.setActive} className={`${this.state.isActive[2].active && 'active'}`}>Project</td>
                  <td id="3" onClick={this.setActive} className={`${this.state.isActive[3].active && 'active'}`}>Blog</td>
                  <td id="4" onClick={this.setActive} className={`${this.state.isActive[4].active && 'active'}`}>Activity</td>
                  <td id="5" onClick={this.setActive} className={`${this.state.isActive[5].active && 'active'}`}>Skills</td>
                  <td id="6" onClick={this.setActive} className={`${this.state.isActive[6].active && 'active'}`}>Education</td>
                  <td id="7" onClick={this.setActive} className={`${this.state.isActive[7].active && 'active'}`}>Awards</td>
                </tr>
              </tbody>
            </table>
          </nav>
        </div>

        <div className="contents">
          { this.state.isActive[0].active && <About/> }
          { this.state.isActive[1].active && <Work/> }
          { this.state.isActive[2].active && <Project/> }
          { this.state.isActive[3].active && <Blog/> }
          { this.state.isActive[4].active && <Activity/> }
          { this.state.isActive[5].active && <Skills/> }
          { this.state.isActive[6].active && <Education/> }
          { this.state.isActive[7].active && <Awards/> }
        </div>

        <div className="footer">
          Copyright Jess2
        </div>
      </div>
    );
  }
}

export default App;