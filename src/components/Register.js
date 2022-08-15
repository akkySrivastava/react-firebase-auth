import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography} from 'mdb-react-ui-kit'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
    const {register} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPass, setConfPass] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        if(password !== confPass){
            setError('Password does not match')
        } else {
            await register(email, password).then((res) => {
            console.log(res)
                navigate('/')
            }).catch((err) => {
                setError(err.message)
                // console.log(err.message)
            })
        }
        
    }
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong className='m-0 p-0' style={{fontWeight: "400", color: "#000"}}>Register</strong>
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
                <MDBInput value={confPass} onChange={(e) => setConfPass(e.target.value)} className='mt-2' type={"password"} label='Confirm your password' size='lg' required />
                <div className='d-flex justify-content-end'>
                <MDBBtn type='submit' className='mt-2' outline style={{fontWeight: "600"}} rounded >
                    Register
                </MDBBtn>
                </div>
                </form>
                
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>Already a member here? </span>
                    <Link to = '/login'>
                        <span className='ms-1'>Login</span>
                    </Link>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

export default Register