import React, { Component } from 'react';
import './About.scss';
import reactImg from 'assets/image/react.png';
import vueImg from 'assets/image/vue.png';
import angularImg from 'assets/image/angular.png';
import ionic2Img from 'assets/image/ionic2.png';
import iotImg from 'assets/image/iot.jpg';
import jqueryImg from 'assets/image/jquery.png';
import jsImg from 'assets/image/js.png';
import nodeImg from 'assets/image/node.png';
import tsImg from 'assets/image/ts.png';
import cssImg from 'assets/image/css.jpg';
import sassImg from 'assets/image/sass.jpg';
import htmlImg from 'assets/image/htmlimg.png';
export default class About extends Component {
  state = {
    skills: [
      { name: "JavaScript(ES6+)", score: 4 },
      { name: "TypeScript", score: 4 },
      { name: "HTML/CSS", score: 4 },
      { name: "Vue.js", score: 4 },
      { name: "React.js", score: 2 },
      { name: "Angular2+", score: 4 },
      { name: "jQuery", score: 3 },
      { name: "Ionic2", score: 4 },
      { name: "Node.js", score: 1 },
      { name: "Express.js", score: 1 },
      { name: "Java", score: 3 },
      { name: "MySQL", score: 2 },
      { name: "MongoDB", score: 1 },
      { name: "Git", score: 3 },
    ],
    experiences: [
      { text: "2013' 서울 성공회대학교 입학" },
      { text: "2014' 성공회대학교 소프트웨어공학과 '학생회장'" },
      { text: "2016' 성공회대학교 커뮤니티 개발/제작 동아리 NUTEE '부회장'" },
      { text: "2017' 성공회대학교 커뮤니티 개발/제작 동아리 NUTEE '회장'" },
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
        stacks: [htmlImg, cssImg, jsImg, jqueryImg]
      },
      {
        title: "NUTEE Mobile Application",
        duration: "2017-07 ~ 2017-10",
        linkName: "Android, iOS",
        role: "Frontend Developer / Designer",
        text: "성공회대학교 대표 커뮤니티 모바일 애플리케이션입니다. Ionic2와 Angular2 기술을 이용하여 하이브리드앱을 구현하였습니다. 웹사이트보다 접근성이 뛰어나며 교내 연락처, 학교 주변 맛집 연락처, 강의평가, 학교 공지사항 등 보다 편리한 기능을 다수 포함하였습니다.",
        stacks: [htmlImg, cssImg, sassImg, tsImg, angularImg, ionic2Img],
      },
      {
        title: "Software Mentoring Mobile Application",
        duration: "2017-09 ~ 2017-12",
        linkName: "Github",
        role: "Frontend Developer / Designer",
        text: "학내 소프트웨어 멘토링 관리 애플리케이션입니다. 멘토, 멘티, 관리자가 이용할 수 있으며 학내에서 진행되는 멘토링 활동 관리에 도움을 줍니다. Ionic2와 Angular2 기술을 이용하여 하이브리드앱을 구현하였습니다.",
        stacks: [htmlImg, cssImg, sassImg, tsImg, angularImg, ionic2Img]
      },
      {
        title: "Wizard's Chess",
        duration: "2017-09 ~ 2017-12",
        linkName: "",
        role: "Backend Developer / 3D Modeling",
        text: "사물인터넷(Internet of Things, IoT) 기술을 이용한 마법사 체스입니다. 음성인식기술을 이용하여 라즈베리파이에 명령을 주면 체스말이 이동하게 되는 시스템이며 체스말과 체스보드 등 기타 하드웨어 부품들을 3D Modeling하여 구축하였습니다. 서버 환경설정은 Node.js를 이용하였습니다.",
        stacks: [nodeImg, iotImg]
      },
      {
        title: "Smart PhoneBook",
        duration: "2018-09 ~ 2018-12",
        linkName: "Github",
        role: "Frontend Developer / Designer",
        text: "준비중입니다.",
        stacks: [htmlImg, cssImg, sassImg, jsImg, vueImg]
      },
      {
        title: "Jess2 Blog",
        duration: "2018-11 ~ 2018-12",
        linkName: "Github",
        role: "Developer / Designer",
        text: "준비중입니다.",
        stacks: [htmlImg, cssImg, sassImg, jsImg, reactImg]
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
      { title: "Music" },
      { title: "Movie" },
      { title: "Yellow Color" },
      { title: "Calligraphy" }
    ],
    works: [
      {
        title: "MAXST",
        period: "2018-08 ~ ing",
        position: "Frontend Developer",
        description: "소프트웨어 개발팀에서 프론트엔드 개발자로 일하고 있습니다. Vue.js, React.js 등 다양한 프레임워크 및 라이브러리를 이용하고 있으며, 웹 개발 위주의 업무를 맡고 있습니다."
      }
    ],
    introduce: {
      name: "정소연(Jess2)",
      birth: "1992. 12. 12",
      description: "새로운 기술을 익히는 것에 즐거움을 느끼며 사람들과 소통하는 것을 좋아하는 프론트엔드 개발자입니다.",
    },
  }
  render() {
    const skills = this.state.skills.map(
      ({name, score}) => (
        <tr>
          <td>{name}</td>
          <td>
          {"■".repeat(score)}
          {"□".repeat(5-score)}
          </td>
        </tr>
      )
    );
    const experiences = this.state.experiences.map(
      ({text}) => (
        <li>{text}</li>
      )
    )
    const projects = this.state.projects.map(
      ({title, duration, linkName, role, text, stacks}) => (
        <table className="projects">
          <thead>
            <tr>
              <td>
                {stacks.map(stack => <img src={stack}/>)}
              </td>
            </tr>
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
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{duration}</td>
            </tr>
          </tbody>
        </table>
      )
    )
    const awards = this.state.awards.map(
      ({title, date}) => (
        <table className="simpleTable">
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
      )
    )
    const interestTags = this.state.interestTags.map(
      ({title}) => (
        <span className="interestTags">{title}</span>
      )
    )
    const works = this.state.works.map(
      ({title, period, position, description}) => (
        <table className="works">
          <thead>
            <tr>
              <td colSpan="2">{title}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>period</td>
              <td>{period}</td>
            </tr>
            <tr>
              <td>position</td>
              <td>{position}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
      )
    )
    return (
      <div className="About">
        <div className="AboutContents">
          <img src={require("assets/image/photo.jpg")}/>
          <div className="text">
             <h2>{this.state.introduce.name}</h2>
             <li>{this.state.introduce.birth}</li>
             <li>{this.state.introduce.description}</li>
      
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
            <a href="https://stackoverflow.com/users/10725519/jess2?tab=profile" target="_blank"><i className="fa fa-stack-overflow"></i></a>
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

            <h4>WORK EXPERIENCES</h4>
            {works}
            <hr/>

            <h4>PERSONAL PROJECTS</h4>
            {projects}
            <hr/>

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