
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Courseitem from './components/course/Courseitem';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CommentList from './components/step03/CommentList';
import Welcome from './components/step03/Welcome';
import CourseListCard2 from './components/step04/CourseListCard2';

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: './img/logo192.png',
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: './img/bear.jpg',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: './img/coffee-blue.jpg',
    }
  ]
  const isChk = true;

  return (
    <main>
      {isChk ? <h2>true 에용</h2> : <CourseListCard2 items={items} />}
    </main>
  );
}

export default App;
