import {Route, Routes} from 'react-router-dom'
import Discount from './components/Discount';
import Pizzas from './components/pizza-about/Pizzas';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Orders from './pages/Orders';
import RegistrPage from './pages/RegistrPage';
import Burgers from './components/burger-about/Burgers';
import Restataunts from './pages/Restataunts';
import User from './pages/User';
import Constructor from './components/counstructor-about/Constructor';

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegistrPage/>}/>
      <Route path='/discount' element={<Discount/>}/>
      <Route path='/pizzas' element={<Pizzas/>}/>
      <Route path='/burgers' element={<Burgers />}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/restaraunts' element={<Restataunts/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/constructor' element={<Constructor/>}/>
    </Routes>
  );
}

export default App;
