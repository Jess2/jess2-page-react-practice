import React, { Component, Fragment } from 'react';
import './App.scss';
import Typing from 'react-typing-animation';
import About from './components/about/About';
import List from './components/list/List';
class App extends Component {
  state = {
    themeId: 1,
    themeName: 'JavaScript',
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
    let _id = parseInt(e.target.id);
    let _title = e.target.getAttribute('value');
    await this.setState({
      themeId: _id,
      themeName: _title
    })
    await this.setState({
      isActive: this.state.isActive.map(
        data => data.active === true ? {...data, active: false} : data
      )
    });
    await this.setState({
      isActive: this.state.isActive.map(
        data => data.id === _id ? {...data, active: true} : data
      )
    });
  }
  render() {
    return (
      <Fragment>
      <div className="App">
        <a href="#" className="top">
          <button><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
        </a>
        <div className="header">
          <div className="headerBody">
            <Typing>
              <span>Frontend Developer</span>
              <h1>Jess2's Blog</h1>
              <Typing.Reset count={1} />
            </Typing>
          </div>
          <nav>
            <table>
              <tbody>
                <tr>
                  <td id="0" value="Profile" onClick={this.setActive} className={`${this.state.isActive[0].active && 'active'}`}>Profile</td>
                  <td id="1" value="JavaScript" onClick={this.setActive} className={`${this.state.isActive[1].active && 'active'}`}>JavaScript</td>
                  <td id="2" value="ES2015" onClick={this.setActive} className={`${this.state.isActive[2].active && 'active'}`}>ES2015</td>
                  <td id="3" value="Vue.js" onClick={this.setActive} className={`${this.state.isActive[3].active && 'active'}`}>Vue.js</td>
                  <td id="4" value="React.js" onClick={this.setActive} className={`${this.state.isActive[4].active && 'active'}`}>React.js</td>
                  <td id="5" value="Node.js" onClick={this.setActive} className={`${this.state.isActive[5].active && 'active'}`}>Node.js</td>
                  <td id="6" value="MongoDB" onClick={this.setActive} className={`${this.state.isActive[6].active && 'active'}`}>MongoDB</td>
                  <td id="7" value="etc." onClick={this.setActive} className={`${this.state.isActive[7].active && 'active'}`}>etc.</td>
                </tr>
              </tbody>
            </table>
          </nav>
        </div>

        <div className="contents">
          {
            this.state.isActive[0].active ? <About/> : <List themeId={this.state.themeId} themeName={this.state.themeName} />
          }
        </div>

        
      </div>
      <div className="footer">
        Copyright Jess2
      </div>
      </Fragment>
    );
  }
}

export default App;