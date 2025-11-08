import { useContext, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
function App() {

  return (
    //Added comments

    <BrowserRouter>

      <Routes>

        <Route index element={

          <LandingPage />


        } />

        <Route path='/admin' element={

          <AdminPage />

        } />

        <Route path='/login' element={

          <LoginPage />

        } />

      </Routes>
    </BrowserRouter>

  )



}

export default App


