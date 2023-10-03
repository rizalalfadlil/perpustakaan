import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Mainpage } from './mainpage';
import { ScrollUp } from './components/scrollup';
function App() {
  return (
    <>
    <div className='content'>
    <ScrollUp/>
    <Navbar className="nb"/>
      <Sidebar/>
      <Mainpage/>
    </div>
    </>
  );
}

export default App;
