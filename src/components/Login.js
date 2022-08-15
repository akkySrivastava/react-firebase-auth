import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography} from 'mdb-react-ui-kit'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const {login} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        await login(email, password).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((err) => {
            setError(err.message)
            // console.log(err.message)
        })
    }
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong style={{fontWeight: "400", color: "#000", marginBottom: "10px"}}>Login</strong>
            </MDBCardTitle>
            {
                    error && <MDBTypography className='ms-4 me-4' note noteColor='danger'>
                    <strong>Error:</strong> {error}
                </MDBTypography>
            }
            <MDBCardBody>
                <form noValidate onSubmit={handleSubmit}>
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} label='Enter your email' size='lg' required />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2' type={"password"} label='Enter your password' size='lg' required />
                <div className='d-flex align-items-center justify-content-end'>
                  <Link className='me-2 m-0' to = '/forgot-password'>Forgot password?</Link>  
                <MDBBtn type='submit' className='mt-2' outline style={{fontWeight: "600"}} rounded >
                    Login
                </MDBBtn>
                </div>
                </form>
                
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>New here? </span>
                    <Link to = '/register'>
                        <span className='ms-1'>Register</span>
                    </Link>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

export default Login