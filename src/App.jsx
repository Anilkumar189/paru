import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
     <div id="">
      <Link to='/' style={{textDecorationLine:"none"}}>
     <h1 className='bg-info text-light m-0'>Dashbord</h1>
      </Link>
      <div className=''>
      <Outlet></Outlet>

      </div>
      </div>
  );
}

export default App;
