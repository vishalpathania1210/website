import React from 'react';
import './index.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Loader from './Components/Loader';
// import LoginPage from './pages/LoginPage';
// import DashboardPage from './pages/Dashboard';
// import Users from './pages/Users';
import { ToastContainer } from 'react-toastify';
import Full from './Full';
// import EmailVerification from './pages/EmailVerification';
// import VerifyOtp from './pages/VerifyOtp';
// import ResetPassword from './pages/ResetPassword';
// import Meetings from './pages/Meetings';
// import ForgotPassword from './Pages/ForgotPassword';
 

const App = () => {

   

  return (
      <>
      
       <ToastContainer position='top-center' />
       <Full />
    {/* <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/VerifyOtp" element={<VerifyOtp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/meetings" element={<Meetings />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
      {/* </Routes>
    </Router> */} 
    </>
  );
};

export default App;
