import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
     <div className='m-1'>
      <h1>EDUPOLY DASHBORD</h1>
      <div className=''>
      <Outlet></Outlet>

      </div>
      </div>
  );
}

export default App;
