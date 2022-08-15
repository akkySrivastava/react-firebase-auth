import { MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import UpdateProfile from './components/UpdateProfile';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center bg-dark m-0 p-0' style={{
      minHeight: "100vh",
      minWidth: '100vw',
      backgroundImage: "linear-gradient(to right, #051421, #042727)"
    }}>
      
        <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path = '/' element = {
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path = '/update-profile' element = {
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              } />
              <Route path='/login' element = {<Login />} />
              <Route path='/register' element = {<Register />} />
              <Route path = '/forgot-password' element = {<ForgotPassword />} />
            </Routes>
          
          </AuthProvider>
        </BrowserRouter>
        
      
    </MDBContainer>
  );
}

export default App;
