
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

function App() {
  return (
    <main>
      <PackingList />
      <hr />
      <h1>Test List - key 가 없어서 오류</h1>
      <TestList />
      <hr />
      <h1>Test List2 - key 값 있어서 ok</h1>
      <TestList2 />
      <hr />
      <h1>Test List3 - key 값 있음 + filter(Profession : chemist)</h1>
      <TestList3 />
    </main>
  );
}

export default App;
