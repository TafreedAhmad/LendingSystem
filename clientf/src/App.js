import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Itemlist from './components/Itemlist';
import Upload from './components/Upload';
import Landingpage from './components/Landingpage';
import Item from './components/Item';
import Message from './components/Message';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createContext } from 'react';
import Admin from './components/Admin';



const ItemContext = createContext('');
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Landingpage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/itemlist' element={<Itemlist/>}/>
          <Route path='/item' element={<Item/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
