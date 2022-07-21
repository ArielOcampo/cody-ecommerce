import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
// import Hero from '../src/components/Hero'
import Navbar from './components/Navbar';
import Store from './pages/Store';

function App() {
  return (
    <div >
      <Navbar />
      <Login/>
      <SignUp/>
      {/* <Hero /> */}
      {/* <Store></Store> */}
    </div>
  );
}

export default App;
