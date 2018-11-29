import React, { Component } from 'react';
import './About.scss';
export default class About extends Component {
  state = {
    // myImageUrl: "../../../assets/image/js.png",
    myImageUrl: "assets/image/js.png",
    skills: [
      { name: "JavaScript(ES6+)", score: 4 },
      { name: "TypeScript", score: 4 },
      { name: "HTML/CSS", score: 4 },
      { name: "Vue.js", score: 4 },
      { name: "React.js", score: 2 },
      { name: "Angular2+", score: 3 },
      { name: "jQuery", score: 3 },
      { name: "Ionic2", score: 4 },
      { name: "Node.js", score: 2 },
      { name: "Express.js", score: 2 },
      { name: "Java", score: 4 },
      { name: "MySQL", score: 2 },
      { name: "MongoDB", score: 1 },
      { name: "Git", score: 3 },
    ],
    experiences: [
      { text: "2013' 서울 성공회대학교 입학" },
      { text: "2014' 성공회대학교 소프트웨어공학과 '학생회장'" },
      { text: "2016' 성공회대학교 커뮤니티 제작 동아리 NUTEE '부회장'" },
      { text: "2017' 성공회대학교 커뮤니티 제작 동아리 NUTEE '회장'" },
      { text: "2018' IT 연합 동아리 '디프만-디자이너와 프로그래머가 만났을 때' 4기 활동" },
      { text: "2018' 성공회대학교 졸업" },
      { text: "2018' MAXST 입사" },
    ],
    projects: [
      {
        title: "NUTEE Web Application",
        duration: "2017-01 ~ 2017-07",
        linkName: "http://nutee.kr",
        role: "Frontend Developer / Designer",
        text: "성공회대학교 대표 커뮤니티 사이트입니다. PC버전과 Mobile버전을 별개로 개발하였으며 일반 반응형 웹사이트보다 화면 크기별로 최적화 된 화면을 보여줍니다. 커뮤니티 게시판 뿐만 아니라 학생식당 식단, 학사일정 등 다양한 학내 정보를 크롤링(crawling) 하여 편의성을 높였습니다.",
        stack: "../../assets/image/js.png"
      },
      {
        title: "NUTEE Mobile Application",
        duration: "2017-07 ~ 2017-10",
        linkName: "Android, iOS",
        role: "Frontend Developer / Designer",
        text: "성공회대학교 대표 커뮤니티 모바일 애플리케이션입니다. Ionic2와 Angular2 기술을 이용하여 하이브리드앱을 구현하였습니다. 웹사이트보다 접근성이 뛰어나며 교내 연락처, 학교 주변 맛집 연락처, 강의평가, 학교 공지사항 등 보다 편리한 기능을 다수 포함하였습니다."
      },
      {
        title: "Software Mentoring Mobile Application",
        duration: "2017-09 ~ 2017-12",
        linkName: "Github",
        role: "Frontend Developer / Designer",
        text: "학내 소프트웨어 멘토링 관리 애플리케이션입니다. 멘토, 멘티, 관리자가 이용할 수 있으며 학내에서 진행되는 멘토링 활동 관리에 도움을 줍니다. Ionic2와 Angular2 기술을 이용하여 하이브리드앱을 구현하였습니다."
      },
      {
        title: "Wizard's Chess",
        duration: "2017-09 ~ 2017-12",
        linkName: "",
        role: "Backend Developer / 3D Modeling",
        text: "사물인터넷(Internet of Things, IoT) 기술을 이용한 마법사 체스입니다. 음성인식기술을 이용하여 라즈베리파이에 명령을 주면 체스말이 이동하게 되는 시스템이며 체스말과 체스보드 등 기타 하드웨어 부품들을 3D Modeling하여 구축하였습니다. 서버 환경설정은 Node.js를 이용하였습니다."
      },
      {
        title: "Smart PhoneBook",
        duration: "2018-09 ~ 2018-12",
        linkName: "Github",
        role: "Frontend Developer / Designer",
        text: "준비중입니다."
      }
    ],
    educations: [
      { title: "성공회대학교 소프트웨어공학과 학사", duration: "2013-03 ~ 2018-08" },
    ],
    awards: [
      { title: "성공회대학교 소프트웨어 경진대회 '2위'", date: "2017-04" },
      { title: "성공회대학교 IT학부 IT경진대회 '금상'", date: "2017-09" },
    ],
    interestTags: [
      { title: "JavaScript" },
      { title: "TypeScript" },
      { title: "Vue.js" },
      { title: "React.js" },
      { title: "Clean Code" },
      { title: "Open Source" },
      { title: "Node.js" },
      { title: "Music" },
      { title: "Calligraphy" }
    ],
  }
  render() {
    const skills = this.state.skills.map(
      ({name, score}) => (
        <tr>
          <td>{name}</td>
          <td>{score}</td>
        </tr>
      )
    );
    const experiences = this.state.experiences.map(
      ({text}) => (
        <li>{text}</li>
      )
    )
    const projects = this.state.projects.map(
      ({title, duration, linkName, role, text, stack}) => (
        <table className="projects">
          <thead>
            {/* {stack} */}
            {/* <img src={require("../../assets/image/js.png")}/>
            <img src={require("../../assets/image/ts.png")}/>
            <img src={require("../../assets/image/vue.png")}/>
            <img src={require("../../assets/image/react.png")}/> */}
            {/* <img src={require(this.state.myImageUrl)}/> */}
            <img src={require("assets/image/js.png")}/>
          </thead>
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{duration}</td>
            </tr>
            <tr>
              <td>{role}</td>
              <td>{linkName}</td>
            </tr>
            <tr>
              <td colSpan="2">{text}</td>
            </tr>
          </tbody>
        </table>
      )
    )
    const educations = this.state.educations.map(
      ({title, duration}) => (
        <table className="simpleTable">
          <tr>
            <td>{title}</td>
            <td>{duration}</td>
          </tr>
        </table>
      )
    )
    const awards = this.state.awards.map(
      ({title, date}) => (
        <table className="simpleTable">
          <tr>
            <td>{title}</td>
            <td>{date}</td>
          </tr>
        </table>
      )
    )
    const interestTags = this.state.interestTags.map(
      ({title}) => (
        <span className="interestTags">{title}</span>
      )
    )
    return (
      <div className="About">
        <div className="AboutContents">
          <img src={require("assets/image/profile.png")}/>
          <div className="text">
            <h2>정소연(Jess2)</h2>
            <li>1992.12.12</li>
            <li>새로운 기술을 익히는 것에 즐거움을 느끼며 사람들과 소통하는 것을 좋아하는 프론트엔드 개발자입니다.</li>
            <br/><hr/>
            <h4>INTERESTS</h4>
            <div className="interestTagsWrapper">
              {interestTags}
            </div>
            <br/><hr/>

            <h4>CONTACTS</h4>
            <a href="mailto:jess2.jsy@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a>
            <a href="https://www.facebook.com/jesssss2" target="_blank"><i className="fa fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/je_ss2" target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://github.com/jess2" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://bitbucket.org/jessie3578" target="_blank"><i className="fa fa-bitbucket"></i></a>
            <br/><br/><hr/>

            <h4>EXPERIENCES</h4>
            {experiences}
            <br/><hr/>

            <h4>SKILLS</h4>
            <table className="skills">
              <tbody>
                {skills}
              </tbody>
            </table>
            <br/><hr/>

            {/* <i className="fa fa-square"></i> */}
            
            <h4>PROJECTS</h4>
            {projects}
            <br/><hr/>

            <h4>EDUCATION</h4>
            {educations}
            <br/><hr/>

            <h4>AWARDS</h4>
            {awards}
            <br/><hr/>
          </div>
        </div>
      </div>
    );
  }
}