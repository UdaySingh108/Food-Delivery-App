import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Routes ,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//https://food-delivery-backend-kt3s.onrender.com
const App = () => {

  const url="https://food-del-backend-u6n1.onrender.com"

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add  url={url}></Add>}></Route>
          <Route path='/list' element={<List url={url}></List>}></Route>
          <Route path='/order' element={<Order url={url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
