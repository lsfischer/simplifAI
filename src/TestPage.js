import SideBar from './SideBar';
import './styles/TestPage.css';

function TestPage() {
  return (
    <div className="MainWrapper">
        <SideBar/>
        <div className='MainContent'></div>
    </div>
  );
}

export default TestPage;
