import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgotPassword = () => {
    const {login, forgotPassword} = useAuth()
    const [email, setEmail] = useState("")
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        await forgotPassword(email).then((res) => {
            console.log(res)
            setSuccess('Check inbox for further instructions')
        }).catch((err) => {
            setError(err.message)
            // console.log(err.message)
        })
    }
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong style={{fontWeight: "400", color: "#000", marginBottom: "10px"}}>Reset Account</strong>
            </MDBCardTitle>
            {
                success && <MDBTypography className='ms-4 me-4' note noteColor='success'>
                <strong>Success:</strong> {success}
            </MDBTypography>
            }
            {
                    error && <MDBTypography className='ms-4 me-4' note noteColor='danger'>
                    <strong>Error:</strong> {error}
                </MDBTypography>
            }
            <MDBCardBody>
                <form noValidate onSubmit={handleSubmit}>
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} label='Enter your email' size='lg' required />
                <div className='d-flex align-items-center justify-content-end'>
                <MDBBtn type='submit' className='mt-2' outline style={{fontWeight: "600"}} rounded >
                    Submit
                </MDBBtn>
                </div>
                </form>
                
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>Back to? </span>
                    <Link to = '/login'>
                        <span className='ms-1'>Login</span>
                    </Link>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

export default ForgotPassword