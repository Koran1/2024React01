
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
import PackingList from './components/step05/PackingList';
import TestList from './components/step06/TestList';
import TestList2 from './components/step06/TestList2';
import TestList3 from './components/step06/TestList3';
import HeartListCart from './components/step_heart/HeartListCart';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: './img/logo192.png',
      isFavorite: true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: './img/bear.jpg',
      isFavorite: true
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: './img/coffee-blue.jpg',
      isFavorite: false
    }
  ]
  return (
    <main>
      {/* <PackingList />
      <hr />
      <h1>Test List - key 가 없어서 오류</h1>
      <TestList />
      <hr />
      <h1>Test List2 - key 값 있어서 ok</h1>
      <TestList2 />
      <hr />
      <h1>Test List3 - key 값 있음 + filter(Profession : chemist)</h1>
      <TestList3 />
      <hr />
      <h1>Heart List</h1>
      <HeartListCart items={items} /> */}
      <Event01 />
      <hr />
      <Event02 />
    </main>
  );
}

export default App;
