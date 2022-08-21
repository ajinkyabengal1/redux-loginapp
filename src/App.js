
import './App.css';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import Login from './components/Login'
import { selectUser } from './feature/UserSlice';


function App() {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout/> : <Login/>}</div>
}

export default App;
