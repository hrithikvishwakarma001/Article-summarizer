import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/about' element={<About />} /> */}
      {/* <Route path='/contact' element={<Contact />} /> */}
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/register' element={<Register />} /> */}
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      {/* <Route path='/profile' element={<Profile />} /> */}
      {/* <Route path='/forgotpassword' element={<ForgotPassword />} /> */}
      {/* <Route path='/resetpassword/:resetToken' element={<ResetPassword />} /> */}
      {/* <Route path='/admin/users' element={<UserList />} /> */}
      {/* <Route path='/admin/user/:id/edit' element={<UserEdit />} /> */}
    </Routes>
  )
}

export default AllRoute
